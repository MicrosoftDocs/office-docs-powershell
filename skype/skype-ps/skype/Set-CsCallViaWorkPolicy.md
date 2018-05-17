---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsCallViaWorkPolicy
schema: 2.0.0
---

# Set-CsCallViaWorkPolicy

## SYNOPSIS
Use the `Set-CsCallViaWorkPolicy` to modify an existing call via work policy that enables and manages the characteristics of outbound calls placed through the Skype for Business client.

## SYNTAX

### Identity
```
Set-CsCallViaWorkPolicy [[-Identity] <XdsIdentity>] [-AdminCallbackNumber <String>] [-Confirm]
 [-Enabled <Boolean>] [-Force] [-Tenant <Guid>] [-UseAdminCallbackNumber <Boolean>] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsCallViaWorkPolicy [-AdminCallbackNumber <String>] [-Confirm] [-Enabled <Boolean>] [-Force]
 [-Instance <PSObject>] [-Tenant <Guid>] [-UseAdminCallbackNumber <Boolean>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsCallViaWorkPolicy -Identity Site:Redmond -Enabled $true -AdminCallbackNumber +14258881234 -UseAdminCallbackNumber $true
```

This example enables the existing call via work policy of the Redmond site and enforces the use of the specified callback number.


## PARAMETERS

### -AdminCallbackNumber
Specifies the number that will be called during the call back to the Skype for Business user before placing the external call.
Typically this is the user's desk phone.
If you want the user be able to change the callback number, use the UseAdminCallbackNumber switch.
The input must contain only digits and can optionally start with a "+".
For instance, "12068881234" or "+12068881234".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
If true ($True) the policy is enabled.
The default at policy creation is false ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the unique identifier assigned to the policy when it was created.
Call via work policies can be assigned at the global, site, or per-user scope.

Global syntax: `-Identity Global`

Site syntax: `-Identity Site:Redmond`

Per-user syntax: `-Identity CallviaWorkStandard`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseAdminCallbackNumber
If true ($True), the number specified in the AdminCallbackNumber is the only number that will be used for the callback to the user, or first leg, of the outbound call.
If false ($False), the user has the opportunity to change the callback number through the client.
The user might choose to change the call back number to a conference room or home number.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Input Types

None.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Remove-CsCallViaWorkPolicy](Remove-CsCallViaWorkPolicy.md)

[New-CsCallViaWorkPolicy](New-CsCallViaWorkPolicy.md)

[Grant-CsCallViaWorkPolicy](Grant-CsCallViaWorkPolicy.md)

[Get-CsCallViaWorkPolicy](Get-CsCallViaWorkPolicy.md)
