---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsThirdPartyVideoSystemPolicy
schema: 2.0.0
---

# Set-CsThirdPartyVideoSystemPolicy

## SYNOPSIS
Creates a new third-party video system policy for use with video teleconferencing (VTC) devices.
These policies determine whether or not the VTC is allowed to send low-resolution video.

## SYNTAX

### Identity
```
Set-CsThirdPartyVideoSystemPolicy [[-Identity] <XdsIdentity>] [-Confirm] [-Force]
 [-SupportsSendingLowResolution <Boolean>] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsThirdPartyVideoSystemPolicy [-Confirm] [-Force] [-Instance <PSObject>]
 [-SupportsSendingLowResolution <Boolean>] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track, and to manage, these devices.

One key management task related to VTC devices is to enable (or disable) the ability of these devices to send low-resolution video.
By default, VTC devices are allowed to send low-resolution video.
However, administrators can create third-party video system policies that disable the use of low-resolution video.
This might be useful for devices located in conference rooms or other areas where low-resolution video is not considered acceptable.
The `New-CsThirdPartyVideoSystem` cmdlet provides a way for administrators to create these third-party video system policies.
Both the global policy and any custom policies you create can later be modified by using the `Set-CsThirdPartyVideoSystemPolicy` cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsThirdPartyVideoSystemPolicy -Identity "RedmondVideoSystemPolicy" -SupportsSendingLowResolution $False
```

The command shown in Example 1 modifies the per-user third-party video system policy RedmondVideoSystemPolicy.
In this example, the ability to send low-resolution video is disabled.


### -------------------------- Example 2 --------------------------
```
Get-CsThirdPartyVideoSystemPolicy -Filter "site:*" | Set-CsThirdPartyVideoSystemPolicy -SupportsSendingLowResolution $False
```

In Example 2, the ability to send low-resolution video is disabled for all third-party video system policies configured at the site scope.
To do that, the command first calls `Get-CsThirdPartyVideoSystemPolicy` along with the Filter parameter; the filter value "site:*" limits returned data to policies configured at the site scope.
That collection of site-based policies is then piped to the `Set-CsThirdPartyVideoSystemPolicy` to set the SupportsSendingLowResolution property to False ($False).


## PARAMETERS

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

### -Identity
Unique identity assigned to the policy when it was created.
Third-party video system policies can be created at the global, site or per-user scope.
To refer to the global instance, use this syntax:

`-Identity "global"`

To refer to a policy at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To refer to a policy at the per-user scope, use syntax similar to the following:

`-Identity "RedmondVideoSystemPolicy"`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
If this parameter is not specified then `Set-CsThirdPartyVideoSystemPolicy` will modify the global video system policy.

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

### -SupportsSendingLowResolution
Indicates whether or not low-resolution video can be used in conjunction with a VTC device.
The default value is True ($True).

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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for the third-party video system policy being modified.
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
The `Set-CsThirdPartyVideoSystemPolicy` cmdlet accepts pipelined instance of the Microsoft.Rtc.Management.WritableConfig.Policy.ThirdPartyVideoSystem.ThirdPartyVideoSystemPolicy object.

## OUTPUTS

###  
None.
Instead, the `Set-CsThirdPartyVideoSystemPolicy` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ThirdPartyVideoSystem.ThirdPartyVideoSystemPolicy object.

## NOTES

## RELATED LINKS

[Get-CsThirdPartyVideoSystemPolicy](Get-CsThirdPartyVideoSystemPolicy.md)

[Grant-CsThirdPartyVideoSystemPolicy](Grant-CsThirdPartyVideoSystemPolicy.md)

[New-CsThirdPartyVideoSystemPolicy](New-CsThirdPartyVideoSystemPolicy.md)

[Remove-CsThirdPartyVideoSystemPolicy](Remove-CsThirdPartyVideoSystemPolicy.md)
