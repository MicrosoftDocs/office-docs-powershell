---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsTeamsEmergencyCallRoutingPolicy
author: danny-levin
ms.author: dannyle
manger: roykuntz
ms.reviewer: chenc, vaddank, pthota
schema: 2.0.0
---

# New-CsTeamsEmergencyCallRoutingPolicy

## SYNOPSIS

## SYNTAX

```
New-CsTeamsEmergencyCallRoutingPolicy [-Tenant <System.Guid>] [-EmergencyNumbers <>]
 [-AllowEnhancedEmergencyServices <Boolean>] [-Description <String>] [-Identity] <XdsIdentity> [-InMemory]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
 This cmdlet creates a new Teams Emergency Call Routing policy with one or more emergency number. Teams Emergency Call Routing policy is used for the life cycle of emergency call routing - emergency numbers and routing configuration.

## EXAMPLES

### Example 1
```powershell
PS C:>  $en1 =  New-CsTeamsEmergencyNumber -EmergencyDialString "112" -EmergencyDialMask "117;897" -OnlinePSTNUsage "Local" -CarrierProfile "Local"
New-CsTeamsEmergencyCallRoutingPolicy -Identity "testecrp" -Tenant $tenant -EmergencyNumbers @{add=$en1} -AllowEnhancedEmergencyServices:$true -Description "test"
```

 This example first creates a new Teams emergency number object and then creates a Teams Emergency Call Routing policy with this emergency number object.
 Note that the OnlinePSTNUsage specified in the first command must previously exist. Note that the resulting object from the New-CsTeamsEmergencyNumber only exists in memory, so you must apply it to a policy to be used.

## PARAMETERS

### -AllowEnhancedEmergencyServices
 Flag to enable Enhanced Emergency Services

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -Description
 The Description parameter describes the Teams Emergency Call Routing policy - what it's for, what type of user it applies to and any other information that helps to identify the purpose of this policy. Maximum characters: 512.

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

### -EmergencyNumbers
 One or more emergency number objects obtained from [New-CsTeamsEmergencyNumber](https://docs.microsoft.com/powershell/module/skype/new-csteamsemergencynumber?view=skype-ps) cmdlet

```yaml
Type:
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
 The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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
 The Identity parameter is a unique identifier that designates the name of the policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
 The InMemory parameter creates an object reference without actually committing the object as a permanent change.

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

### -Tenant
 Specify the tenant id

```yaml
Type: System.Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
