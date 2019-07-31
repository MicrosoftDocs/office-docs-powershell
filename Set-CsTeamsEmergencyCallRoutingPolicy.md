---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online 
title: Set-CsTeamsEmergencyCallRoutingPolicy
author:
ms.author:Danny Levin
ms.reviewer: 
schema: 2.0.0
---

# Set-CsTeamsEmergencyCallRoutingPolicy

## SYNOPSIS

## SYNTAX

### Identity (Default)
```
Set-CsTeamsEmergencyCallRoutingPolicy [-Tenant <System.Guid>] [-EmergencyNumbers <>]
 [-AllowEnhancedEmergencyServices <Boolean>] [-Description <String>] [[-Identity] <XdsIdentity>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsEmergencyCallRoutingPolicy [-Tenant <System.Guid>] [-EmergencyNumbers <>]
 [-AllowEnhancedEmergencyServices <Boolean>] [-Description <String>] [-Instance <PSObject>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
{{ This cmdlet modifies an existing Teams Emergency Call Routing Policy. Teams Emergency Call Routing policy is used for the life cycle of emergency call routing – emergency numbers and routing configuration}}

## EXAMPLES

### Example 1
```powershell
PS C:> {{ Set-CsTeamsEmergencyCallRoutingPolicy -Identity "testecrp" -Tenant $tenant -AllowEnhancedEmergencyServices 0 -Description "test"}}
```

{{ This example modifies an existing Teams Emergency Call Routing Policy. }}

## PARAMETERS

### -AllowEnhancedEmergencyServices
{{ Flag to enable Enhanced Emergency Services }}

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
{{ Provide a description of the Teams Emergency Call Routing policy to identify purpose of setting it. }}

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
{{ Group of emergency numbers  }}

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
{{ The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required. }}

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
{{ The Identity parameter is a unique identifier that designates the name of the policy. }}

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
{{ The Instance parameter allows you to pass a reference to an object to the cmdlet, rather than set individual parameter values. You can retrieve this object reference by calling the Get-CsTeamsEmergencyCallRoutingPolicy cmdlet. }}

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
{{ Specify the tenant id }}

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
