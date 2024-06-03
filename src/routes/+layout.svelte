<script lang="ts">
    import "/src/app.css"
    import favicon from "$lib/img/favicon.png";
    import { t, loadTranslations} from "$lib/lang/translation";
    import UnderConstruction from "$lib/components/UnderConstruction.svelte";

    import { theme } from "$lib/theme/theme";

    let languageModal: HTMLDialogElement | null;
    $:mode = "dark";

    function switchTranslation(lang: string) {
        loadTranslations(lang);
        languageModal?.close();
    }

</script>

<sveltekit:head>
    <title>Nicolas Jeanmenne</title>
    <link rel="icon" type="image/png" href={favicon} />
</sveltekit:head>

<UnderConstruction />


<!-- Header (tabs) -->
<div role="tablist" class="tabs tabs-bordered">
    <a role="tab" href="/" class="tab tab-active">{$t("tabs.home")}</a>
    <a role="tab" href="#" class="tab">{$t("tabs.resume")}</a>
    <a role="tab" href="#" class="tab">{$t("tabs.projects")}</a>
    <div role="tab" class="tab">
        <button on:click={() => languageModal?.showModal()}>{$t("language")}</button>
        <dialog bind:this={languageModal} class="modal">
                <div class="modal-box">
                    <h3 class="text-2x1">{$t("select-lang")}</h3>
                    <div class="join join-vertical">
                        <button class="btn join-item" on:click={() => switchTranslation("en")}>🇬🇧 English</button>
                        <button class="btn join-item" on:click={() => switchTranslation("fr")}>🇫🇷 Français</button>
                        <button class="btn join-item" on:click={() => switchTranslation("es")}>🇪🇸 Español</button>
                    </div>
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button></button>
                </form>
        </dialog>
    </div>
    <div role="tab" class="tab">
        <label class="swap swap-rotate">
            <input type="checkbox" value="light" class="theme-controller" on:click={() => mode === "light" ? mode = "light" : mode = "dark"}/>

            <img src={theme.mode.light_icon} alt="light theme icon" class="swap-off w-14 h-5/6 object-contain"/>
            <img src={theme.mode.dark_icon} alt="dark theme icon" class="swap-on w-14 h-5/6 object-contain"/>
        </label>
    </div>
</div>

<slot />



<!-- Footer -->
<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <nav>
        <div class="grid grid-flow-col gap-4">
            <a href="https://github.com/nicojmn">
                {#if mode === "light"}
                    <img src={theme.icons.github.dark} alt="github" class="w-10 h-10"/>
                {:else}
                    <img src={theme.icons.github.light} alt="github" class="w-10 h-10"/>
                {/if}
            </a>
            <a href="https://gitlab.com/nicojmn">
                <img src={theme.icons.gitlab} alt="gitlab" class="w-10 h-10"/>
            </a>
            <a href="https://linkedin.com/in/nicolas-jeanmenne/">
                <img src={theme.icons.linkedin} alt="linkedin" class="w-10 h-10"/>
            </a>
        </div>
    </nav> 
    <aside>
        <p>
            Website source code is under <a href="https://opensource.org/license/bsd-3-clause" class="link">free BDS-License</a> 
            and availaible <a href="https://github.com/nicojmn:nicojmn.github.io" class="link">here</a>.
        </p>
    </aside>
</footer>

<style>
    label {
        height: 85%;
    }
</style>