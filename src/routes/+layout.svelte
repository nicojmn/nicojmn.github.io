<script lang="ts">
    import "/src/app.css"
    import { t, loadTranslations} from "$lib/lang/translation";
    import UnderConstruction from "$lib/components/UnderConstruction.svelte";

    import { theme } from "$lib/theme/theme";

    function switchTranslation(lang: string) {
        loadTranslations(lang);
        let modBox = document.getElementById("language-modal");
        modBox?.close() as HTMLElement;
    }

</script>

<svelte:head>
    <title>NJ - Home</title>
</svelte:head>

<UnderConstruction />

<div role="tablist" class="tabs tabs-bordered">
    <a role="tab" href="/" class="tab tab-active">{$t("tabs.home")}</a>
    <a role="tab" href="#" class="tab">{$t("tabs.resume")}</a>
    <a role="tab" href="#" class="tab">{$t("tabs.projects")}</a>
    <div role="tab" class="tab">
        <button on:click={() => document.getElementById("language-modal")?.showModal()}>{$t("language")}</button>
        <dialog id="language-modal" class="modal">
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
            <input type="checkbox" value="light" class="theme-controller"/>

            <img src={theme.light_icon} alt="light theme icon" class="swap-off w-14 h-5/6 object-contain"/>
            <img src={theme.dark_icon} alt="dark theme icon" class="swap-on w-14 h-5/6 object-contain"/>
        </label>
    </div>
</div>

<style>
    label {
        height: 85%;
    }
</style>

<slot />