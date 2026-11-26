---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: odocspr
online version:
schema: 2.0.0
title: Remove-CsPreMeetingConsent
---

# Remove-CsPreMeetingConsent

## SYNOPSIS

Removes a pre-meeting consent configuration.

## SYNTAX

### Identity (Default)

```
Remove-CsPreMeetingConsent [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey

```
Remove-CsPreMeetingConsent -Id <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Before removing a configuration, review meeting policies that reference its ID and update their content settings as needed. For more information, see [Set-CsTeamsMeetingPolicy](Set-CsTeamsMeetingPolicy.md).

## EXAMPLES

### Example 1: Remove a configuration

```powershell
$consentId = '<consent-configuration-guid>'
Remove-CsPreMeetingConsent -Id $consentId
Get-CsPreMeetingConsent
```

Replace `<consent-configuration-guid>` with the ID of the unassigned configuration. After removing it, the example lists the remaining configurations so you can verify the removal.

## PARAMETERS

### -Confirm

Prompts for confirmation before removing the configuration.

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

The ID of the configuration to remove.

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

The identity of the configuration to remove. You can get this value from the `Identity` property returned by `Get-CsPreMeetingConsent`.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf

Shows what would happen without removing the configuration.

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

### System.Object

You can pipe an object that has an `Identity` property to this cmdlet.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsPreMeetingConsent](Get-CsPreMeetingConsent.md)

[New-CsPreMeetingConsent](New-CsPreMeetingConsent.md)

[Set-CsPreMeetingConsent](Set-CsPreMeetingConsent.md)

[Set-CsTeamsMeetingPolicy](Set-CsTeamsMeetingPolicy.md)
