---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: odocspr
online version:
schema: 2.0.0
title: New-CsTeamsLocalizedContent
---

# New-CsTeamsLocalizedContent

## SYNOPSIS

Creates a localized entry for pre-meeting consent.

## SYNTAX

```
New-CsTeamsLocalizedContent -LanguageId <String> -Title <String> -Content <String>
 [-IsDefault <Nullable[Boolean]>] [-Timestamp <Nullable[Int64]>] [<CommonParameters>]
```

## DESCRIPTION

Use `New-CsTeamsLocalizedContent` to define the title and body text for a language. Pass the resulting entry to the `-LocalizedContent` parameter of [New-CsPreMeetingConsent](New-CsPreMeetingConsent.md) or [Set-CsPreMeetingConsent](Set-CsPreMeetingConsent.md).

## EXAMPLES

### Example 1: Create the default localized entry

```powershell
$englishContent = New-CsTeamsLocalizedContent `
    -LanguageId 'en-US' `
    -Title 'Consent required' `
    -Content 'Review the meeting terms before joining.' `
    -IsDefault $true
```

This example creates an English (United States) entry and marks it as the default.

## PARAMETERS

### -Content

The localized body text of the pre-meeting consent message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault

Use `$true` to mark the entry as the fallback when the participant's language doesn't match a configured language. Use `$false` or omit this parameter for an additional language. Mark exactly one language as the default in each configuration.

```yaml
Type: Nullable[Boolean]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LanguageId

The language identifier for the localized entry, such as `en-US` or `fr-FR`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timestamp

The last update time of the entry, expressed as seconds since the Unix epoch (UTC).

```yaml
Type: Nullable[Int64]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title

The localized title of the pre-meeting consent message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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

### LocalizedContent

## NOTES

## RELATED LINKS

[New-CsPreMeetingConsent](New-CsPreMeetingConsent.md)

[Set-CsPreMeetingConsent](Set-CsPreMeetingConsent.md)
