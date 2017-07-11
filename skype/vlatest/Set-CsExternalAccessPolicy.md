---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsExternalAccessPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Enables you to modify the properties of an existing external access policy.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated  organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as MSN; and, 3) access Microsoft Lync Server 2010 over the Internet, without having to log on to your internal network.

Below Content Applies To: Lync Server 2013

Enables you to modify the properties of an existing external access policy.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as MSN; and, 3) access Lync Server over the Internet, without having to log on to your internal network.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Online

Set-CsExternalAccessPolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-EnableFederationAccess \<bool\>\] \[-EnableXmppAccess \<bool\>\] \[-EnablePublicCloudAccess \<bool\>\] \[-EnablePublicCloudAudioVideoAccess \<bool\>\] \[-EnableOutsideAccess \<bool\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsExternalAccessPolicy \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-EnableFederationAccess \<bool\>\] \[-EnableXmppAccess \<bool\>\] \[-EnablePublicCloudAccess \<bool\>\] \[-EnablePublicCloudAudioVideoAccess \<bool\>\] \[-EnableOutsideAccess \<bool\>\] \[-Instance \<psobject\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Enables you to modify the properties of an existing external access policy.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as MSN; and, 3) access Skype for Business Server 2015 over the Internet, without having to log on to your internal network.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsExternalAccessPolicy [[-Identity] <XdsIdentity>] [-Description <String>]
 [-EnableFederationAccess <Boolean>] [-EnablePublicCloudAccess <Boolean>]
 [-EnablePublicCloudAudioVideoAccess <Boolean>] [-Force] [-WhatIf] [-Confirm] [-EnableOutsideAccess <Boolean>]
 [-EnableXmppAccess <Boolean>] [-Tenant <Guid>] [<CommonParameters>]
```

### Instance
```
Set-CsExternalAccessPolicy [-Instance <PSObject>] [-Description <String>] [-EnableFederationAccess <Boolean>]
 [-EnablePublicCloudAccess <Boolean>] [-EnablePublicCloudAudioVideoAccess <Boolean>] [-Force] [-WhatIf]
 [-Confirm] [-EnableOutsideAccess <Boolean>] [-EnableXmppAccess <Boolean>] [-Tenant <Guid>]
 [<CommonParameters>]
```

###  (Default)
```
Set-CsExternalAccessPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-Description <Object>] [-EnableFederationAccess <Object>] [-EnableOutsideAccess <Object>]
 [-EnablePublicCloudAccess <Object>] [-EnablePublicCloudAudioVideoAccess <Object>] [-EnableXmppAccess <Object>]
 [-Force] [-Instance <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When you install Lync Server 2010 your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with people who have SIP accounts in your Active Directory Domain Services (AD DS).
In addition, users are not allowed to access Lync Server 2010 over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Lync Server 2010.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs, you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1.
Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.

2.
Communicate with people who have SIP accounts with a public instant messaging service such as MSN.

3.Access Lync Server 2010 over the Internet, without having to first log on to your internal network.
This enables your users to use Microsoft Lync 2010 and log on to Lync Server 2010 from an Internet café or other remote location.

After an external access policy has been created, you can use the Set-CsExternalAccessPolicy cmdlet to change the property values of that policy.
For example, by default the global policy does not allow users to communicate with people who have accounts with a federated organization.
If you would like to grant this capability to all of your users you can call Set-CsExternalAccessPolicy and set the value of the global policy's EnableFederationAccess property to True.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsExternalAccessPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsExternalAccessPolicy"}

Below Content Applies To: Lync Server 2013

When you install Lync Server your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with people who have SIP accounts in your Active Directory Domain Services (AD DS).
In addition, users are not allowed to access Lync Server over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Lync Server.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs, you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1.
Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.

2.
Communicate with people who have SIP accounts with a public instant messaging service such as MSN.

3.Access Lync Server over the Internet, without having to first log on to your internal network.
This enables your users to use Lync and log on to Lync Server from an Internet café or other remote location.

After an external access policy has been created, you can use the Set-CsExternalAccessPolicy cmdlet to change the property values of that policy.
For example, by default the global policy does not allow users to communicate with people who have accounts with a federated organization.
If you would like to grant this capability to all of your users you can call Set-CsExternalAccessPolicy and set the value of the global policy's EnableFederationAccess property to True.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsExternalAccessPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsExternalAccessPolicy"}

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

When you install Skype for Business Server 2015 your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with people who have SIP accounts in your Active Directory Domain Services.
In addition, users are not allowed to access Skype for Business Server 2015 over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Skype for Business Server 2015.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs, you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1.
Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.

2.
Communicate with people who have SIP accounts with a public instant messaging service such as MSN.

3.
Access Skype for Business Server 2015 over the Internet, without having to first log on to your internal network.
This enables your users to use Skype for Business and log on to Skype for Business Server 2015 from an Internet café or other remote location.

After an external access policy has been created, you can use the Set-CsExternalAccessPolicy cmdlet to change the property values of that policy.
For example, by default the global policy does not allow users to communicate with people who have accounts with a federated organization.
If you would like to grant this capability to all of your users you can call the Set-CsExternalAccessPolicy cmdlet and set the value of the global policy's EnableFederationAccess property to True.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsExternalAccessPolicy -Identity RedmondExternalAccessPolicy -EnableFederationAccess $True
```

The command shown in Example 1 modifies the per-user external access policy that has the Identity RedmondExternalAccessPolicy.
In this example, the command changes the value of the EnableFederationAccess property to True.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies the per-user external access policy that has the Identity RedmondExternalAccessPolicy.
In this example, the command changes the value of the EnableFederationAccess property to True.

Set-CsExternalAccessPolicy -Identity RedmondExternalAccessPolicy -EnableFederationAccess $True

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies the per-user external access policy that has the Identity RedmondExternalAccessPolicy.
In this example, the command changes the value of the EnableFederationAccess property to True.

Set-CsExternalAccessPolicy -Identity RedmondExternalAccessPolicy -EnableFederationAccess $True

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsExternalAccessPolicy | Set-CsExternalAccessPolicy -EnableFederationAccess $True
```

In Example 2, federation access is enabled for all the external access policies configured for use in the organization.
To do this, the command first calls Get-CsExternalAccessPolicy without any parameters; this returns a collection of all the external policies currently configured for use.
That collection is then piped to Set-CsExternalAccessPolicy, which changes the value of the EnableFederationAccess property for each policy in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, federation access is enabled for all the external access policies configured for use in the organization.
To do this, the command first calls Get-CsExternalAccessPolic without any parameters; this returns a collection of all the external policies currently configured for use.
That collection is then piped to Set-CsExternalAccessPolicy, which changes the value of the EnableFederationAccess property for each policy in the collection.

Get-CsExternalAccessPolicy | Set-CsExternalAccessPolicy -EnableFederationAccess $True

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, federation access is enabled for all the external access policies configured for use in the organization.
To do this, the command first calls the Get-CsExternalAccessPolicy cmdlet without any parameters; this returns a collection of all the external policies currently configured for use.
That collection is then piped to the Set-CsExternalAccessPolicy cmdlet, which changes the value of the EnableFederationAccess property for each policy in the collection.

Get-CsExternalAccessPolicy | Set-CsExternalAccessPolicy -EnableFederationAccess $True

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsExternalAccessPolicy -Filter tag:* | Set-CsExternalAccessPolicy -EnableFederationAccess $True
```

The preceding example enables federation access for all the external access policies that have been configured at the per-user scope.
To carry out this task, the first thing the command does is use Get-CsExternalAcessPolicy and the Filter parameter to return a collection of all the policies that have been configured at the per-user scope.
(The filter value "tag:*" limits returned data to policies that have an Identity that begins with the string value "tag:".
Any policy with an Identity that begins with "tag:" has been configured at the per-user scope.) The filtered collection is then piped to Set-CsExternalAccessPolicy, which modifies the EnableFederationAccess property for each policy in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 enables federation access for all the external access policies that have been configured at the per-user scope.
To carry out this task, the first thing the command does is use Get-CsExternalAcessPolicy and the Filter parameter to return a collection of all the policies that have been configured at the per-user scope.
(The filter value "tag:*" limits returned data to policies that have an Identity that begins with the string value "tag:".
Any policy with an Identity that begins with "tag:" has been configured at the per-user scope.) The filtered collection is then piped to Set-CsExternalAccessPolicy, which modifies the EnableFederationAccess property for each policy in the collection.

Get-CsExternalAccessPolicy -Filter tag:* | Set-CsExternalAccessPolicy -EnableFederationAccess $True

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 enables federation access for all the external access policies that have been configured at the per-user scope.
To carry out this task, the first thing the command does is use the Get-CsExternalAcessPolicy cmdlet and the Filter parameter to return a collection of all the policies that have been configured at the per-user scope.
(The filter value "tag:*" limits returned data to policies that have an Identity that begins with the string value "tag:".
Any policy with an Identity that begins with "tag:" has been configured at the per-user scope.) The filtered collection is then piped to the Set-CsExternalAccessPolicy cmdlet, which modifies the EnableFederationAccess property for each policy in the collection.

Get-CsExternalAccessPolicy -Filter tag:* | Set-CsExternalAccessPolicy -EnableFederationAccess $True

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsExternalAccessPolicy | Where-Object {$_.EnablePublicCloudAccess -eq $True} | Set-CsExternalAccessPolicy -EnableFederationAccess $True
```

In Example 4, federation access is enabled for all the external access policies that allow public cloud access.
To do this, the command first uses Get-CsExternalAccessPolicy to return a collection of all the external access policies currently configured for use in the organization.
This collection is piped to the Where-Object cmdlet, which picks out only those policies where the EnablePublicCloudAccess property is equal to True.
The filtered collection is then piped to Set-CsExternalAccessPolicy, which takes each policy and sets the EnableFederationAccess property to True.
The net result: all external access policies that allow public cloud access will also allow federation access.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, federation access is enabled for all the external access policies that allow public cloud access.
To do this, the command first uses Get-CsExternalAccessPolicy to return a collection of all the external access policies currently configured for use in the organization.
This collection is piped to the Where-Object cmdlet, which picks out only those policies where the EnablePublicCloudAccess property is equal to True.
The filtered collection is then piped to Set-CsExternalAccessPolicy, which takes each policy and sets the EnableFederationAccess property to True.
The net result: all external access policies that allow public cloud access will also allow federation access.

Get-CsExternalAccessPolicy | Where-Object {$_.EnablePublicCloudAccess -eq $True} | Set-CsExternalAccessPolicy -EnableFederationAccess $True

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, federation access is enabled for all the external access policies that allow public cloud access.
To do this, the command first uses the Get-CsExternalAccessPolicy cmdlet to return a collection of all the external access policies currently configured for use in the organization.
This collection is piped to the Where-Object cmdlet, which picks out only those policies where the EnablePublicCloudAccess property is equal to True.
The filtered collection is then piped to the Set-CsExternalAccessPolicy cmdlet, which takes each policy and sets the EnableFederationAccess property to True.
The net result: all external access policies that allow public cloud access will also allow federation access.

Get-CsExternalAccessPolicy | Where-Object {$_.EnablePublicCloudAccess -eq $True} | Set-CsExternalAccessPolicy -EnableFederationAccess $True

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Unique identifier for the external access policy to be modified.
External access policies can be configured at the global, site, or per-user scopes.
To modify the global policy, use this syntax: -Identity global.
To modify a site policy, use syntax similar to this: -Identity site:Redmond.
To modify a per-user policy, use syntax similar to this: -Identity SalesAccessPolicy.
If this parameter is not specified then the global policy will be modified.

Note that wildcards are not allowed when specifying an Identity.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.



Below Content Applies To: Skype for Business Online

{{Fill Instance Description}}



```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables administrators to provide additional text to accompany the policy.
For example, the Description might include information about the users the policy should be assigned to.



Below Content Applies To: Skype for Business Online

{{Fill Description Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFederationAccess
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether the user is allowed to communicate with people who have SIP accounts with a federated organization.
The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill EnableFederationAccess Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePublicCloudAccess
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Indicates whether the user is allowed to communicate with people who have SIP accounts with a public Internet connectivity provider such as MSN.
The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill EnablePublicCloudAccess Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePublicCloudAudioVideoAccess
Below Content Applies To: Lync Server 2010

Indicates whether the user is allowed to conduct audio/video conversations with people who have SIP accounts with a public Internet connectivity provider such as MSN.
When set to True, audio and video options in Lync 2010 will be disabled any time a user is communicating with a public Internet connectivity contact.
The default value is False.



Below Content Applies To: Lync Server 2013

Indicates whether the user is allowed to conduct audio/video conversations with people who have SIP accounts with a public Internet connectivity provider such as MSN.
When set to False, audio and video options in Lync will be disabled any time a user is communicating with a public Internet connectivity contact.
The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill EnablePublicCloudAudioVideoAccess Description}}



Below Content Applies To: Skype for Business Server 2015

Indicates whether the user is allowed to conduct audio/video conversations with people who have SIP accounts with a public Internet connectivity provider such as MSN.
When set to False, audio and video options in Skype for Business will be disabled any time a user is communicating with a public Internet connectivity contact.
The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOutsideAccess
Below Content Applies To: Lync Server 2010, Skype for Business Online

{{Fill EnableOutsideAccess Description}}



Below Content Applies To: Lync Server 2013

Indicates whether the user is allowed to connect to Lync Server over the Internet, without logging on to the organization's internal network.
The default value is False.



Below Content Applies To: Skype for Business Server 2015

Indicates whether the user is allowed to connect to Skype for Business Server 2015 over the Internet, without logging on to the organization's internal network.
The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableXmppAccess
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Indicates whether the user is allowed to communicate with users who have SIP accounts with a federated XMPP (Extensible Messaging and Presence Protocol ) partner.
The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill EnableXmppAccess Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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
Below Content Applies To: Skype for Business Online

{{Fill Tenant Description}}



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the external access policy is being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

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

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.
Set-CsExternalAccessPolicy accepts pipelined input of the external access policy object.

### System.Management.Automation.PSObject

###  
Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.
The Set-CsExternalAccessPolicy cmdlet accepts pipelined input of the external access policy object.

## OUTPUTS

###  
Set-CsExternalAccessPolicy does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.

### System.Object

###  
The Set-CsExternalAccessPolicy cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d3e45fbb-357f-4ff2-b52d-58b94e8f2241(OCS.14).aspx)

[Get-CsExternalAccessPolicy]()

[Grant-CsExternalAccessPolicy]()

[New-CsExternalAccessPolicy]()

[Remove-CsExternalAccessPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/d3e45fbb-357f-4ff2-b52d-58b94e8f2241(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d3e45fbb-357f-4ff2-b52d-58b94e8f2241(OCS.16).aspx)

