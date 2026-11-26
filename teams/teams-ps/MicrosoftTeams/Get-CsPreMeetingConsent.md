---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: odocspr
online version:
schema: 2.0.0
title: Get-CsPreMeetingConsent
---

# Get-CsPreMeetingConsent

## SYNOPSIS

Gets pre-meeting consent configurations.

## SYNTAX

### Identity (Default)

```
Get-CsPreMeetingConsent [[-Identity] <String>] [<CommonParameters>]
```

### Filter

```
Get-CsPreMeetingConsent [-Filter <String>] [<CommonParameters>]
```

### ParentAndRelativeKey

```
Get-CsPreMeetingConsent -Id <String> [<CommonParameters>]
```

## DESCRIPTION

Use `Get-CsPreMeetingConsent` without arguments to list all pre-meeting consent configurations. Specify `-Id` or `-Identity` to retrieve a particular configuration, or `-Filter` to match configuration identities. The `LocalizedContent` property of a returned configuration contains its localized consent content.

## EXAMPLES

### Example 1: List all configurations

```powershell
Get-CsPreMeetingConsent
```

This example lists all pre-meeting consent configurations.

### Example 2: Display the localized content for a configuration

```powershell
$consentId = '<consent-configuration-guid>'
$consent = Get-CsPreMeetingConsent -Id $consentId
$consent.LocalizedContent
```

Replace `<consent-configuration-guid>` with the identifier of the configuration you want to retrieve. The example displays the localized content for that configuration.

## PARAMETERS

### -Filter

Matches configuration identities using a PowerShell wildcard pattern.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -Id

The ID of the configuration to retrieve.

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

The identity of the configuration to retrieve. Omit this parameter to list configurations, or use the `Identity` property of a returned configuration to retrieve that configuration again.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
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

[New-CsPreMeetingConsent](New-CsPreMeetingConsent.md)

[Set-CsPreMeetingConsent](Set-CsPreMeetingConsent.md)

[Remove-CsPreMeetingConsent](Remove-CsPreMeetingConsent.md)
