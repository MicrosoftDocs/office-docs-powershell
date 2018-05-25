---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsExternalAccessPolicy
schema: 2.0.0
---

# Get-CsExternalAccessPolicy

## SYNOPSIS
Returns information about the external access policies that have been configured for use in your organization.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as Windows Live; and, 3) access Skype for Business Server over the Internet, without having to log on to your internal network.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsExternalAccessPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsExternalAccessPolicy [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsExternalAccessPolicy [[-Identity] <Object>] [-ApplicableTo <Object>] [-BypassDualWrite <Object>]
 [-Filter <Object>] [-Include <Object>] [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
When you first configure Skype for Business Online your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with other people who have SIP accounts in your Online organization or in your Active Directory Domain Services for on-premises deployments.

For on-premises deployments, users are not allowed to access Skype for Business Server over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Skype for Business Server.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs, you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1. Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.
2. Communicate with people who have SIP accounts with a public instant messaging service such as Windows Live.
3. Access Skype for Business Server over the Internet, without having to first log on to your internal network.
This enables your users to use Skype for Business and log on to Skype for Business Server from an Internet café or other remote location.

The Get-CsExternalAccessPolicy cmdlet provides a way for you to return information about all of the external access policies that have been configured for use in your organization.


## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Get-CsExternalAccessPolicy
```

Example 1 returns a collection of all the external access policies configured for use in your organization.
Calling the Get-CsExternalAccessPolicy cmdlet without any additional parameters always returns the complete collection of external access policies.


### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Online)
```
Get-CsExternalAccessPolicy -Identity "tag:RedmondExternalAccessPolicy"
```

Example 2 uses the Identity parameter to return the external access policy that has the Identity tag:RedmondExternalAccessPolicy.
Because access policy Identities must be unique, this command will never return more than one item.



### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```
Get-CsExternalAccessPolicy -Identity site:Redmond
```

Example 2 uses the Identity parameter to return the external access policy that has the Identity site:Redmond.
Because access policy Identities must be unique, this command will never return more than one item.

### -------------------------- Example 3 --------------------------
```
Get-CsExternalAccessPolicy -Filter tag:*
```

The command shown in Example 3 uses the Filter parameter to return all of the external access policies that have been configured at the per-user scope; the parameter value "tag:*" limits returned data to those policies that have an Identity that begins with the string value "tag:".
By definition, any policy that has an Identity beginning with "tag:" is a policy that has been configured at the per-user scope.

### -------------------------- Example 4 --------------------------
```
Get-CsExternalAccessPolicy | Where-Object {$_.EnableFederationAccess -eq $True}
```

In Example 4, the Get-CsExternalAccessPolicy cmdlet and the Where-Object cmdlet are used to return all the external access policies that grant users federation access.
To do this, the Get-CsExternalAccessPolicy cmdlet is first used to return a collection of all the external access policies currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where the EnableFederationAccess property is equal to True.

### -------------------------- Example 5 --------------------------
```
Get-CsExternalAccessPolicy | Where-Object {$_.EnableFederationAccess -eq $True -and $_.EnablePublicCloudAccess -eq $True}
```

The command shown in Example 5 returns the external access policies that meet two criteria: both federation access and public cloud access are allowed.
In order to perform this task, the command first uses the Get-CsExternalAccessPolicy cmdlet to return a collection of all the access policies in use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies that meet two criteria: the EnableFederationAccess property must be equal to True and the EnablePublicCloudAccess property must also be equal to True.
Only policies in which both EnableFederationAccess and EnablePublicCloudAccess are True will be returned and displayed on the screen.

### -------------------------- EXAMPLE 6 --------------------------
```
Get-CsExternalAccessPolicy -ApplicableTo "kenmyer@litwareinc.com"
```

In Example 6, the ApplicableTo parameter is used to return only the policies that can be assigned to the user "kenmyer@litwareinc.com".

NOTE: The ApplicableTo parameter can only be used with Skype for Business Online; that's because, with Skype for Business Online, there might be policies that cannot be assigned to certain users due to licensing and/or country/region restrictions.

NOTE: This command requires the Office 365 UsageLocation property to be configured for the user's Active Directory user account.


## PARAMETERS

### -Identity
Unique Identity assigned to the policy when it was created.
External access policies can be assigned at the global, site, or per-user scope.
To refer to the global instance use this syntax: -Identity global.
To refer to a policy at the site scope, use this syntax: -Identity site:Redmond.
To refer to a policy at the per-user scope, use syntax similar to this: -Identity RedmondPolicy.

Note that wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
To do a wildcard search for policies, use the Filter parameter instead.

If neither the Identity nor Filter parameters are specified, then the Get-CsExternalAccessPolicy cmdlet will bring back a collection of all the external access policies configured for use in the organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables you to do a wildcard search for external access policies.
For example, to find all the policies configured at the site scope, use this Filter: 

`site:*`

To find the per-user policies Seattle, Seville, and Saskatoon (all of which start with the letter "S") use this Filter: 

`"S*".`

Note that the Filter parameter can only be applied to the policy Identity.



**Below Content Applies To:** Skype for Business Online

Enables you to do a wildcard search for external access policies.
For example, to find all the policies configured at the per-user scope, use this Filter:

`"tag:*"`

To find the per-user policies Seattle, Seville, and Saskatoon (all of which start with the letter "S") use this Filter:

`"tag:S*"`

Note that the Filter parameter can only be applied to the policy Identity.



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the external access policy data from the local replica of the Central Management store rather than from the Central Management store itself.

NOTE: This parameter is not used with Skype for Business Online.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicableTo
Returns a list of the external access policies that can be assigned to the specified user.
For example, to return a collection of policies that can be assigned to the user kenmyer@litwareinc.com, use this command:

`Get-CsExternalAccessPolicy -ApplicableTo "kenmyer@litwareinc.com"`

The ApplicableTo parameter is useful because it's possible that only some of the available per-user external access policies can be assigned to a given user.
This is due to the fact that different licensing agreements and different country/region restrictions might limit the policies that can be assigned to a user.
For example, if Ken Myer works in China, country/region restrictions might limit his access to policies A, B, D, and E, Meanwhile, similar restrictions might limit Pilar Ackerman, who works in the United States, to policies A, B, C, and F.
If you call Get-CsExternalAccessPolicy without using the ApplicableTo parameter you will get back a collection of all the available policies, including any policies that can't actually be assigned to a specific user.

The ApplicableTo parameter applies only to Skype for Business Online.
This parameter is not intended for use with the on-premises version of Skype for Business Server 2015.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Include
PARAMVALUE: Automatic | All | SubscriptionDefaults | TenantDefinedOnly

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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

### Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy


## NOTES


## RELATED LINKS

[Grant-CsExternalAccessPolicy](Grant-CsExternalAccessPolicy.md)

[New-CsExternalAccessPolicy](New-CsExternalAccessPolicy.md)

[Remove-CsExternalAccessPolicy](Remove-CsExternalAccessPolicy.md)

[Set-CsExternalAccessPolicy](Set-CsExternalAccessPolicy.md)

