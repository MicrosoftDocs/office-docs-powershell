---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: odocspr
online version:
schema: 2.0.0
title: New-CsPreMeetingConsent
---

# New-CsPreMeetingConsent

## SYNOPSIS

Creates a pre-meeting consent configuration with localized content.

## SYNTAX

### Identity

```
New-CsPreMeetingConsent [-Identity] <String> [-LocalizedContent <PSListModifier[LocalizedContent]>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey

```
New-CsPreMeetingConsent [-Id <String>] [-LocalizedContent <PSListModifier[LocalizedContent]>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Create each language entry with [New-CsTeamsLocalizedContent](New-CsTeamsLocalizedContent.md), then pass the entries to `New-CsPreMeetingConsent`. A configuration can include up to five languages. Mark exactly one language as the default.

To reference the configuration from a meeting policy, use its ID as the `-PreMeetingConsentContentIdentifier` value for [Set-CsTeamsMeetingPolicy](Set-CsTeamsMeetingPolicy.md). That cmdlet also documents the `-EnablePreMeetingConsent` setting.

## EXAMPLES

### Example 1: Create a configuration for two languages

```powershell
$englishContent = New-CsTeamsLocalizedContent `
    -LanguageId 'en-US' `
    -Title 'Consent required' `
    -Content 'Review the meeting terms before joining.' `
    -IsDefault $true

$frenchContent = New-CsTeamsLocalizedContent `
    -LanguageId 'fr-FR' `
    -Title 'Consentement requis' `
    -Content 'Consultez les conditions de la réunion avant de la rejoindre.' `
    -IsDefault $false

$consent = New-CsPreMeetingConsent -LocalizedContent @($englishContent, $frenchContent)
$consent
```

This example creates a configuration with a generated ID, English as the default language, and French as an additional language. It displays the returned configuration.

## PARAMETERS

### -Confirm

Prompts for confirmation before creating the configuration.

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

The ID to assign to the configuration. If you omit both `-Id` and `-Identity`, the cmdlet generates a GUID as a string.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: False
Position: Named
Default value: A generated GUID string
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity to assign to the configuration. Use this parameter instead of `-Id`, not with it.

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

The localized entries to include in the configuration. Pass entries created by `New-CsTeamsLocalizedContent`.

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

Shows what would happen without creating the configuration.

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

### PreMeetingConsent

## NOTES

## RELATED LINKS

[New-CsTeamsLocalizedContent](New-CsTeamsLocalizedContent.md)

[Get-CsPreMeetingConsent](Get-CsPreMeetingConsent.md)

[Set-CsPreMeetingConsent](Set-CsPreMeetingConsent.md)

[Remove-CsPreMeetingConsent](Remove-CsPreMeetingConsent.md)

[Set-CsTeamsMeetingPolicy](Set-CsTeamsMeetingPolicy.md)
