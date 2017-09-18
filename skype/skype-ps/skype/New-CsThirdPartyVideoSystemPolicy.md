---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# New-CsThirdPartyVideoSystemPolicy

## SYNOPSIS
Creates a new third-party video system policy for use with video teleconferencing (VTC) devices.
These policies determine whether or not the VTC is allowed to send low-resolution video.

## SYNTAX

```
New-CsThirdPartyVideoSystemPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-InMemory]
 [-SupportsSendingLowResolution <Boolean>] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track and to manage, these devices.

One key management task related to VTC devices is to enable (or disable) the ability of these devices to send low-resolution video.
By default, VTC devices are allowed to send low-resolution video.
However, administrators can create third-party video system policies that disable the use of low-resolution video.
This might be useful for devices located in conference rooms or other areas where low-resolution video is not considered acceptable.
The `New-CsThirdPartyVideoSystem` cmdlet provides a way for administrators to create these third-party video system policies.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsThirdPartyVideoSystemPolicy -Identity "site:Redmond" -SupportsSendingLowResolution $False
```

The command shown in Example 1 creates a new third-party video system policy assigned to the Redmond site.
With this policy, VTCs will not be allowed to send low resolution video; that's because the SupportsSendingLowResolution parameter has been set to False ($False).


## PARAMETERS

### -Identity
Indicates the unique Identity to be assigned to the policy.
Third party video system policies can be created at the site or per-user scope.
To create a policy at the site scope, use syntax similar to this: `-Identity "site:Redmond"`.
To create a policy at the per-user scope, use syntax similar to this: `-Identity "RedmondVideoSystemPolicy"`.

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

### -SupportsSendingLowResolution
Indicates whether or not low-resolution video can be sent by a VTC device.
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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for the third-party video system policy being created.
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
None.
The `New-CsThirdPartyVideoSystemPolicy` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsThirdPartyVideoSystemPolicy` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ThirdPartyVideoSystem.ThirdPartyVideoSystemPolicy object.

## NOTES

## RELATED LINKS

[Get-CsThirdPartyVideoSystemPolicy]()

[Grant-CsThirdPartyVideoSystemPolicy]()

[Remove-CsThirdPartyVideoSystemPolicy]()

[Set-CsThirdPartyVideoSystemPolicy]()
