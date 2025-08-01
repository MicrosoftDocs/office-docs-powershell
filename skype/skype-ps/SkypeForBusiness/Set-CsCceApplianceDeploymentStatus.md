---
applicable: Skype for Business Online
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-cscceappliancedeploymentstatus
schema: 2.0.0
title: Set-CsCceApplianceDeploymentStatus
---

# Set-CsCceApplianceDeploymentStatus

## SYNOPSIS
Provide the topic introduction here.

**Note**: This cmdlet will be deprecated from Teams PowerShell Module.

## SYNTAX

### Identity (Default)
```
Set-CsCceApplianceDeploymentStatus -Action <HybridPstnApplianceAction>
 -Status <HybridPstnApplianceActionStatus> [-Version <String>] [-Error <String>]
 [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsCceApplianceDeploymentStatus -Action <HybridPstnApplianceAction>
 -Status <HybridPstnApplianceActionStatus> [-Version <String>] [-Error <String>]
 [-Identity] <XdsGlobalRelativeIdentity> [-Tenant <Guid>] [-Instance <PSObject>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Provide the detailed description here.

## EXAMPLES

### Example 1
```
Insert example commands for example 1.
```

Insert descriptive text for example 1.


## PARAMETERS

### -Action

> Applicable: Skype for Business Online

PARAMVALUE: Deploy | BitsUpdate | OsUpdate | Remove

```yaml
Type: HybridPstnApplianceAction
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Error

> Applicable: Skype for Business Online

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Online

PARAMVALUE: SwitchParameter

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

> Applicable: Skype for Business Online

PARAMVALUE: XdsGlobalRelativeIdentity

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Skype for Business Online

PARAMVALUE: PSObject

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status

> Applicable: Skype for Business Online

PARAMVALUE: Started | Finished | Error

```yaml
Type: HybridPstnApplianceActionStatus
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online

PARAMVALUE: Guid

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

### -Version

> Applicable: Skype for Business Online

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Online

PARAMVALUE: SwitchParameter

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

### -WhatIf

> Applicable: Skype for Business Online

PARAMVALUE: SwitchParameter

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
