---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Grant-CsThirdPartyVideoSystemPolicy
schema: 2.0.0
---

# Grant-CsThirdPartyVideoSystemPolicy

## SYNOPSIS
Assigns a per-user third-party video system policy to video teleconferencing (VTC) devices.
These policies determine whether or not the VTC is allowed to send low-resolution video.

## SYNTAX

```
Grant-CsThirdPartyVideoSystemPolicy [-Identity] <UserIdParameter> [-PolicyName] <String> [-Confirm]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track, and to manage, these devices.

One key management task related to VTC devices is to enable (or disable) the ability of these devices to send low-resolution video.
By default, VTC devices are allowed to send low-resolution video.
However, administrators can create third-party video system policies that disable the use of low-resolution video.
This might be useful for devices located in conference rooms or other areas where low-resolution video is not considered acceptable.
The Grant-CsThirdPartyVideoSystem cmdlet provides a way for administrators to assign (or unassign) third-party video system policies created at the per-user scope.

Note that this cmdlet can only be used to assign per-user policies; that's because policies at the global or the site scope do not need to be assigned.
If you want a VTC device to be managed by the global policy or (if available) the device site policy, simply unassign any per-user policy previously assigned to the device.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Get-CsThirdPartyVideoSystem -Filter {DisplayName -eq "Redmond Video Device"} | Grant-CsThirdPartyVideoSystemPolicy -PolicyName "RedmondVideoSystemPolicy"
```

The command shown in Example 1 assigns the third-party video system policy RedmondVideoSystemPolicy to the VTC device with the Active Directory display name Redmond Video Device.
To do this, the command first uses the Get-CsThirdPartyVideoSystem cmdlet and the Filter parameter to return the device with the display name Redmond Video Device.
This device is then piped to the Grant-CsThirdPartyVideoSystemPolicy cmdlet, which assigns the device the policy RedmondVideoSystemPolicy.


### -------------------------- Example 2 -------------------------- 
```

Get-CsThirdPartyVideoSystem -Filter {DisplayName -eq "Redmond Video Contact"} | Grant-CsThirdPartyVideoSystemPolicy -PolicyName $Null
```

The command shown in Example 2 is effectively the inverse of the command shown in Example 1: in this case, any per-user policy previously assigned to Redmond Video Device is removed.
(Per-user policies can be removed by setting the PolicyName to a null value.) After the policy has been removed, the device will be managed by using the appropriate site policy.
If no site policy exists then Redmond Video Device will be managed by using the global policy.


### -------------------------- Example 3 -------------------------- 
```

Get-CsThirdPartyVideoSystem -Filter {ThirdPartyVideoSystemPolicy -eq $Null} | Grant-CsThirdPartyVideoSystemPolicy -PolicyName "RedmondVideoSystemPolicy"
```

Example 3 assigns the per-user video system policy RedmondVideoSystemPolicy to any VTC device that has not been assigned a per-user policy.
To do this, the command first uses the Get-CsUser cmdlet and the Filter parameter to return a collection of all the devices that have not been assigned a per-user policy.
(In other words, all the devices whose ThirdPartyVideoSystemPolicy property has been set to a null value.) That collection is then piped to the Grant-CsThirdPartyVideoSystemPolicy cmdlet, which assigns each device the RedmondVideoSystemPolicy policy.


## PARAMETERS

### -Identity
Unique identifier for the video system being assigned the per-user policy.
Video systems are identified by using the Active Directory distinguished name (DN) of the associated contact object.
By default, video systems use a GUID (globally unique identifier) as their common name, which means systems will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
This means you might find it easier to modify third-party video systems by using the Get-CsThirdPartyVideoSystem cmdlet to return the devices and then piping those objects to the Grant-CsThirdPartyVideoSystemPolicy cmdlet.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PolicyName
"Name" of the policy to be assigned.
The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix).
For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; a policy with the Identity tag:RedmondUsersVideoPolicy has a PolicyName equal to RedmondUsersVideoPolicy.
To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
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

### -DomainController
Enables you to specify the fully qualified domain name (FQDN) of a domain controller to be contacted when assigning the new policy.
If this parameter is not specified then the Grant-CsThirdPartyVideoSystemPolicy cmdlet will contact the first available domain controller.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a contact object through the pipeline that represents the user being assigned the policy.
By default, the Grant-CsThirdPartyVideoSystemPolicy cmdlet does not pass objects through the pipeline.

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
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Grant-CsThirdPartyVideoSystemPolicy cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
By default, the Grant-CsThirdPartyVideoSystemPolicy cmdlet does not return a value or object.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ThirdPartyVideoSystem.ThirdPartyVideoSystemPolicy object.

## NOTES

## RELATED LINKS

[Get-CsThirdPartyVideoSystemPolicy](Get-CsThirdPartyVideoSystemPolicy.md)

[New-CsThirdPartyVideoSystemPolicy](New-CsThirdPartyVideoSystemPolicy.md)

[Remove-CsThirdPartyVideoSystemPolicy](Remove-CsThirdPartyVideoSystemPolicy.md)

[Set-CsThirdPartyVideoSystemPolicy](Set-CsThirdPartyVideoSystemPolicy.md)
