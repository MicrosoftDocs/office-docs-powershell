---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsThirdPartyVideoSystemPolicy
schema: 2.0.0
---

# Get-CsThirdPartyVideoSystemPolicy

## SYNOPSIS
Returns information about the third-party video system policies configured for use in the organization.
These policies determine whether or not a VTC (video teleconferencing) device is allowed to send low-resolution video.

## SYNTAX

### Filter
```
Get-CsThirdPartyVideoSystemPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsThirdPartyVideoSystemPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track, and to manage, these devices.

One key management task related to VTC devices is to enable (or disable) the ability of these devices to send low-resolution video.
By default, VTC devices are allowed to send low-resolution video.
However, administrators can create third-party video system policies that disable the use of low-resolution video.
This might be useful for devices located in conference rooms or other areas where low-resolution video is not considered acceptable.
The Get-CsThirdPartyVideoSystem cmdlet provides a way for administrators to return information about the third-party video system policies configured for use in the organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsThirdPartyVideoSystemPolicy

```

The command shown in Example 1 returns information about all the third-party video system policies currently configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsThirdPartyVideoSystemPolicy -Identity "RedmondVideoSystemPolicy"
```

In Example 2, information for a single third-party video system policy is returned: the per-user policy with the Identity RedmondVideoSystemPolicy.

### -------------------------- Example 3 --------------------------
```
Get-CsThirdPartyVideoSystemPolicy -Filter "site:*"
```

Example 3 returns information about all the third-party video system policies that have been configured at the site scope.
To do this, the Filter parameter is included, along with the filter value "site:*".

### -------------------------- Example 4 --------------------------
```
Get-CsThirdPartVideoSystemPolicy | Where-Object {$_.SupportsSendingLowResolution -eq $True}
```

The command shown in Example 4 returns information for all the third-party video system policies that allow users to send low-resolution video.
To carry out this task, Get-CsThirdPartyVideoSystemPolicy is first used to return a collection of all the policies configured for use in the organization.
That collection is then pipe to the Where-Object cmdlet, which picks out only those policies where the SupportsSendingLowResolution property is set to True ($True).


## PARAMETERS

### -Filter
Enables you to do a wildcard search for third-party video system policies.
For example, to find all the policies configured at the site scope, use this syntax:

`-Filter "site:*"`

To find all the per-user policies, use this syntax:

`-Filter "tag:*"`

Note that you can only filter on the Identity property.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identity assigned to the policy when it was created.
Third-party video system policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

`-Identity "global"`

To refer to a policy at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To refer to a policy at the per-user scope, use syntax similar to the following:

`-Identity "RedmondVideoSystemPolicy"`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
To do a wildcard search for policies, use the Filter parameter instead.
If neither the Identity nor the Filter parameter is specified the Get-CsThirdPartyVideoSystemPolicy cmdlet returns information about all the video system policies configured for use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the third-party video system policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the third-party video system policies are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.ThirdPartyVideoSystem.ThirdPartyVideoSystemPolicy


## NOTES


## RELATED LINKS

[Grant-CsThirdPartyVideoSystemPolicy](Grant-CsThirdPartyVideoSystemPolicy.md)

[New-CsThirdPartyVideoSystemPolicy](New-CsThirdPartyVideoSystemPolicy.md)

[Remove-CsThirdPartyVideoSystem](Remove-CsThirdPartyVideoSystem.md)

[Set-CsThirdPartyVideoSystemPolicy](Set-CsThirdPartyVideoSystemPolicy.md)

