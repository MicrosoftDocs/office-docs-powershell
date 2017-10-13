---
external help file: 
applicable: Skype for Business Server 2015
title: Remove-CsThirdPartyVideoSystemPolicy
schema: 2.0.0
---

# Remove-CsThirdPartyVideoSystemPolicy

## SYNOPSIS
Removes a third-party video system policy.
Video system policies determine whether or not a VTC (video teleconferencing) device is allowed to send low-resolution video.

## SYNTAX

```
Remove-CsThirdPartyVideoSystemPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-Tenant <Guid>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track and to manage, these devices.

One key management task related to VTC devices is to enable (or disable) the ability of these devices to send low-resolution video.
By default, VTC devices are allowed to send low-resolution video.
However, administrators can create third-party video system policies that prevent the use of low-resolution video.
This might be useful for devices located in conference rooms or other areas where low-resolution video is not considered acceptable.
The `Remove-CsThirdPartyVideoSystem` cmdlet provides a way for administrators to remove any third-party video system policies that have been created at the site or the per-user scope.
When a site policy is deleted, VTC devices that were previously managed by that policy will fall under the jurisdiction of the global policy.
When a per-user policy is deleted, VTC devices previously managed by that policy will be managed by their site policy.
If the device site does not have a site policy then those devices will be managed by using the global policy.

Note that this cmdlet can also be run against the global third-party video system policy.
However, the cmdlet will not actually delete the global policy; Skype for Business Server does not allow global policies to be deleted.
Instead, the properties within the global policy will be reset to their default values.
In this case, that means that the SupportsSendingLowResolution property will be set to True ($True).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsThirdPartyVideoSystemPolicy -Identity "RedmondVideoSystemPolicy
```

The command shown in Example 1 removes the per-user third-party video system policy with the Identity RedmondVideoSystemPolicy.


### -------------------------- Example 2 --------------------------
```
Get-CsThirdPartyVideoSystemPolicy | Remove-CsThirdPartyVideoSystemPolicy
```

In Example 2, all the third-party video system policies configured for use in the organization are deleted.
This is done by first using the `Get-CsThirdPartyVideoSystemPolicy` to return a collection of all the video system policies; that collection is then then piped to and deleted by, the `Remove-CsThirdPartyVideoSystemPolicy`.
Note that the global policy will not actually be deleted; Skype for Business Server does not allow you to delete global policies.
However, all the properties within the global policy will be reset to their default values.


### -------------------------- Example 3 --------------------------
```
Get-CsThirdPartyVideoSystemPolicy -Filter "site:*" | Remove-CsThirdPartyVideoSystemPolicy
```

Example 3 deletes all the third-party video system policies configured at the site scope.
To do this, `Get-CsThirdPartyVideoSystemPolicy` is called along with the Filter parameter and the filter value "site:*"; this limits the returned data to policies configured at the site scope.
Those policies are then piped to the `Remove-CsThirdPartyVideoSystemPolicy` cmdlet, which deletes all the policies configured at the site scope.


## PARAMETERS

### -Identity
Unique identity assigned to the policy when it was created.
Third party video system policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

`-Identity "global"`

Keep in mind that you cannot actually remove the global policy.
If you run `Remove-CsThirdPartyVideoSystemPolicy` against the global policy, the policy will not be deleted.
Instead, all the properties in the policy will be reset to their default values.

To refer to a policy at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To refer to a policy at the per-user scope, use syntax similar to the following:

`-Identity "RedmondVideoSystemPolicy"`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Describes what would happen if you executed the command without actually executing the command.

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for the third party video system policy being removed.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

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
The `Remove-CsThirdPartyVideoSystemPolicy` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ThirdPartyVideoSystem.ThirdPartyVideoSystemPolicy object

## OUTPUTS

###  
None.
Instead, the `Remove-CsThirdPartyVideoSystemPolicy` cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ThirdPartyVideoSystem.ThirdPartyVideoSystemPolicy object.

## NOTES

## RELATED LINKS

[Get-CsThirdPartyVideoSystemPolicy](Get-CsThirdPartyVideoSystemPolicy.md)

[Grant-CsThirdPartyVideoSystemPolicy](Grant-CsThirdPartyVideoSystemPolicy.md)

[New-CsThirdPartyVideoSystemPolicy](New-CsThirdPartyVideoSystemPolicy.md)

[Set-CsThirdPartyVideoSystemPolicy](Set-CsThirdPartyVideoSystemPolicy.md)
