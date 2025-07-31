---
applicable: Microsoft Teams
author: tonywoodruff
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: sandrao
Module Name: MicrosoftTeams
ms.author: anwoodru
ms.reviewer: kponnus
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsipphonepolicy
schema: 2.0.0
title: Remove-CsTeamsIPPhonePolicy
---

# Remove-CsTeamsIPPhonePolicy

## SYNOPSIS

Use the Remove-CsTeamsIPPhonePolicy cmdlet to remove a custom policy that's been created for controlling Teams phone experiences.

## SYNTAX

```
Remove-CsTeamsIPPhonePolicy [[-Identity] <XdsIdentity>]
 [-Confirm]
 [-Force]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-CsTeamsIPPhonePolicy cmdlet to remove a custom policy that's been created for controlling Teams IP Phones experiences.

Note: Ensure the policy is not assigned to any users or the policy deletion will fail.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsIPPhonePolicy -Identity CommonAreaPhone
```
This example shows the deletion of the policy CommonAreaPhone.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specify the name of the TeamsIPPhonePolicy that you would like to remove.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
