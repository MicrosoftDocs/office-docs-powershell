---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: odocspr
online version:
schema: 2.0.0
title: Set-CsPreMeetingConsent
---

# Set-CsPreMeetingConsent

## SYNOPSIS

Updates the localized content of a pre-meeting consent configuration.

## SYNTAX

### Identity (Default)

```
Set-CsPreMeetingConsent [-Identity] <String> [-LocalizedContent <PSListModifier[LocalizedContent]>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey

```
Set-CsPreMeetingConsent -Id <String> [-LocalizedContent <PSListModifier[LocalizedContent]>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use `Set-CsPreMeetingConsent` to replace the existing collection of localized entries or add an entry to it. Create entries with [New-CsTeamsLocalizedContent](New-CsTeamsLocalizedContent.md). A configuration can include up to five languages. Mark exactly one language as the default.

## EXAMPLES

### Example 1: Replace the localized content

```powershell
$consentId = '<consent-configuration-guid>'

$englishContent = New-CsTeamsLocalizedContent `
    -LanguageId 'en-US' `
    -Title 'Review the meeting terms' `
    -Content 'Read and accept the meeting terms before joining.' `
    -IsDefault $true

$frenchContent = New-CsTeamsLocalizedContent `
    -LanguageId 'fr-FR' `
    -Title 'Consultez les conditions de la réunion' `
    -Content 'Lisez et acceptez les conditions avant de rejoindre la réunion.' `
    -IsDefault $false

Set-CsPreMeetingConsent -Id $consentId -LocalizedContent @($englishContent, $frenchContent)
```

Replace `<consent-configuration-guid>` with the identifier of an existing configuration. The example replaces its localized content with the English and French entries.

### Example 2: Add a language

```powershell
$consentId = '<consent-configuration-guid>'

$spanishContent = New-CsTeamsLocalizedContent `
    -LanguageId 'es-ES' `
    -Title 'Consentimiento requerido' `
    -Content 'Revise las condiciones de la reunión antes de unirse.' `
    -IsDefault $false

Set-CsPreMeetingConsent -Id $consentId -LocalizedContent @{ Add = @($spanishContent) }
```

Replace `<consent-configuration-guid>` with the ID of an existing configuration that doesn't already include Spanish and has room for another language. The example adds Spanish without replacing the existing entries.

## PARAMETERS

### -Confirm

Prompts for confirmation before updating the configuration.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

This switch doesn't override `-Confirm` or `-WhatIf`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id

The ID of the configuration to update.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity of the configuration to update. You can get this value from the `Identity` property returned by `Get-CsPreMeetingConsent`.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedContent

To replace the existing collection, pass the collection of entries to keep. To add an entry without replacing the collection, pass a hashtable with an `Add` key as shown in Example 2.

```yaml
Type: PSListModifier[LocalizedContent]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Shows what would happen without updating the configuration.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsPreMeetingConsent](Get-CsPreMeetingConsent.md)

[New-CsPreMeetingConsent](New-CsPreMeetingConsent.md)

[New-CsTeamsLocalizedContent](New-CsTeamsLocalizedContent.md)

[Remove-CsPreMeetingConsent](Remove-CsPreMeetingConsent.md)
