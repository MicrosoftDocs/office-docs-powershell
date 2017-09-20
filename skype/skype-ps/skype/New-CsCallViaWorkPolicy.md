---
external help file: 
applicable: Skype for Business Server 2015
title: New-CsCallViaWorkPolicy
schema: 2.0.0
---

# New-CsCallViaWorkPolicy

## SYNOPSIS
Use the New-CsCallViaWorkPolicy cmdlet to create a new call via work policy that enables and manages the characteristics of outbound calls placed through the Skype for Business client.

## SYNTAX

```
New-CsCallViaWorkPolicy [-Identity] <XdsIdentity> [-AdminCallbackNumber <String>] [-Confirm]
 [-Enabled <Boolean>] [-Force] [-InMemory] [-Tenant <Guid>] [-UseAdminCallbackNumber <Boolean>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

New-CsCallViaWorkPolicy -Identity Site:Redmond -Enabled $true -AdminCallbackNumber +14258881234 -UseAdminCallbackNumber $true
```

This example creates a call via work policy for the Redmond site.
The policy is enabled, the administrative callback number is specified and enforced.


## PARAMETERS

### -Identity
Unique identity to be assigned to the policy.
New policies can be created at the site or per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as the Identity.
For example, to create a new policy for the Redmond site you would use this syntax: `-Identity site:Redmond.`
To create a new per-user policy, this syntax: `-Identity SalesDepartmentPolicy.`

You cannot create a new global policy.
If you want to make changes to the global policy, use the Set-CsCallViawork cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use the Set-CsCallViawork cmdlet.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
Specifies whether the policy is enabled at creation.
The default is false ($False).

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.

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
The user might choose to change the call back number to a personal phone number like a mobile, home, or hotel phone number.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
The New-CsCallViaWorkPolicy returns Microsoft.Rtc.Management.WritableConfig.Policy.CallViaWork.CallViaWorkPolicy instances.

## NOTES

## RELATED LINKS

[Remove-CsCallViaWorkPolicy]()

[Set-CsCallViaWorkPolicy]()

[Grant-CsCallViaWorkPolicy]()

[Get-CsCallViaWorkPolicy]()

