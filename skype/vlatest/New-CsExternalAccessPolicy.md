---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsExternalAccessPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Enables you to create a new external access policy.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated  organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as MSN; and, 3) access Microsoft Lync Server 2010 over the Internet, without having to log on to your internal network.

Below Content Applies To: Lync Server 2013

Enables you to create a new external access policy.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as MSN; and, 3) access Lync Server over the Internet, without having to log on to your internal network.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Online

New-CsExternalAccessPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-EnableFederationAccess \<bool\>\] \[-EnableXmppAccess \<bool\>\] \[-EnablePublicCloudAccess \<bool\>\] \[-EnablePublicCloudAudioVideoAccess \<bool\>\] \[-EnableOutsideAccess \<bool\>\] \[-InMemory\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Enables you to create a new external access policy.
External access policies determine whether or not your users can: 1) communicate with users who have Session Initiation Protocol (SIP) accounts with a federated organization; 2) communicate with users who have SIP accounts with a public instant messaging (IM) provider such as MSN; and, 3) access Skype for Business Server 2015 over the Internet, without having to log on to your internal network.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsExternalAccessPolicy [-Identity] <XdsIdentity> [-Description <String>]
 [-EnableFederationAccess <Boolean>] [-EnableOutsideAccess <Boolean>] [-EnablePublicCloudAccess <Boolean>]
 [-EnablePublicCloudAudioVideoAccess <Boolean>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-EnableXmppAccess <Boolean>] [-BypassDualWrite <Object>] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When you install Lync Server 2010 your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with other people who have SIP accounts in your Active Directory Domain Services (AD DS).
In addition, users are not allowed to access Lync Server over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Lync Server.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1.
Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.

2.
Communicate with people who have SIP accounts with a public instant messaging service such as MSN.

3.
Access Lync Server over the Internet, without having to first log on to your internal network.
This enables your users to use Microsoft Lync 2010 and log on to Lync Server from an Internet café or other remote location.

When you install Lync Server, a global external access policy is automatically created for you.
In addition to the global policy, you can also create custom external access policies at either the site or the per-user scope.
If you create an external access policy at the site scope, that policy will automatically be assigned to the site upon creation.
If you create an external access policy at the per-user scope, that policy will be created but will not be assigned to any users.
To assign the policy to a user or group of users, use the Grant-CsExternalAccessPolicy cmdlet.

New external access policies can be created by using New-CsExternalAccessPolicy.
Note that these policies can only be created at the site or the per-user scope; you cannot create a new policy at the global scope.
In addition, you can have only one external access policy per site: if the Redmond site already has been assigned an external access policy you cannot create a second policy for the site.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsExternalAccessPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Below Content Applies To: Lync Server 2013

When you install Lync Server your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with other people who have SIP accounts in your Active Directory Domain Services (AD DS).
In addition, users are not allowed to access Lync Server over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Lync Server.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs you can use external access policies to extend the ability of your users to communicate and collaborate.
External access policies can grant (or revoke) the ability of your users to do any or all of the following:

1.
Communicate with people who have SIP accounts with a federated organization.
Note that enabling federation alone will not provide users with this capability.
Instead, you must enable federation and then assign users an external access policy that gives them the right to communicate with federated users.

2.
Communicate with people who have SIP accounts with a public instant messaging service such as MSN.

3.
Access Lync Server over the Internet, without having to first log on to your internal network.
This enables your users to use Lync Server and log on to Lync Server from an Internet café or other remote location.

When you install Lync Server, a global external access policy is automatically created for you.
In addition to the global policy, you can also create custom external access policies at either the site or the per-user scope.
If you create an external access policy at the site scope, that policy will automatically be assigned to the site upon creation.
If you create an external access policy at the per-user scope, that policy will be created but will not be assigned to any users.
To assign the policy to a user or group of users, use the Grant-CsExternalAccessPolicy cmdlet.

New external access policies can be created by using New-CsExternalAccessPolicy.
Note that these policies can only be created at the site or the per-user scope; you cannot create a new policy at the global scope.
In addition, you can have only one external access policy per site: if the Redmond site already has been assigned an external access policy you cannot create a second policy for the site.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsExternalAccessPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsExternalAccessPolicy"}

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

When you install Skype for Business Server 2015 your users are only allowed to exchange instant messages and presence information among themselves: by default, they can only communicate with other people who have SIP accounts in your Active Directory Domain Services.
In addition, users are not allowed to access Skype for Business Server 2015 over the Internet; instead, they must be logged on to your internal network before they will be able to log on to Skype for Business Server 2015.

That might be sufficient to meet your communication needs.
If it doesn't meet your needs you can use external access policies to extend the ability of your users to communicate and collaborate.
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

When you install Skype for Business Server 2015, a global external access policy is automatically created for you.
In addition to the global policy, you can also create custom external access policies at either the site or the per-user scope.
If you create an external access policy at the site scope, that policy will automatically be assigned to the site upon creation.
If you create an external access policy at the per-user scope, that policy will be created but will not be assigned to any users.
To assign the policy to a user or group of users, use the Grant-CsExternalAccessPolicy cmdlet.

New external access policies can be created by using the New-CsExternalAccessPolicy cmdlet.
Note that these policies can only be created at the site or the per-user scope; you cannot create a new policy at the global scope.
In addition, you can have only one external access policy per site: if the Redmond site already has been assigned an external access policy you cannot create a second policy for the site.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsExternalAccessPolicy -Identity site:Redmond -EnableFederationAccess $True -EnableOutsideAccess $True
```

The command shown in Example 1 creates a new external access policy that has the Identity site:Redmond; upon creation, this policy will automatically be assigned to the Redmond site.
Note that this new policy sets both the EnableFederationAccess and the EnableOutsideAccess properties to True.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new external access policy that has the Identity site:Redmond; upon creation, this policy will automatically be assigned to the Redmond site.
Note that this new policy sets both the EnableFederationAccess and the EnableOutsideAccess properties to True.

New-CsExternalAccessPolicy -Identity site:Redmond -EnableFederationAccess $True -EnableOutsideAccess $True

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new external access policy that has the Identity site:Redmond; upon creation, this policy will automatically be assigned to the Redmond site.
Note that this new policy sets both the EnableFederationAccess and the EnableOutsideAccess properties to True.

New-CsExternalAccessPolicy -Identity site:Redmond -EnableFederationAccess $True -EnableOutsideAccess $True

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$x = New-CsExternalAccessPolicy -Identity RedmondAccessPolicy -InMemory
$x.EnableFederationAccess = $True
$x.EnablePublicCloudAccess = $True
$x.EnableOutsideAccess = $True
Set-CsExternalAccessPolicy -Instance $x
```

Example 2 demonstrates the use of the InMemory parameter; this parameter enables you to create an in-memory-only instance of an external access policy.
After it has been created, you can modify the in-memory-only instance, then use the Set-CsExternalAccessPolicy cmdlet to transform the virtual policy into a real external access policy.

To do this, the first command in the example uses New-CsExternalAccessPolicy and the InMemory parameter to create a virtual policy with the Identity RedmondAccessPolicy; this virtual policy is stored in a variable named $x.
The next three commands are used to modify three properties of the virtual policy: EnableFederationAccess, EnablePublicCloudAccess, and the EnableOutsideAccess.
Finally, the last command uses Set-CsExternalAccessPolicy to create an actual per-user external access policy with the Identity RedmondAccessPolicy.
If you do not call Set-CsExternalAccessPolicy, then the virtual policy will disappear as soon as you end your Windows PowerShell session or delete the variable $x.
Should that happen, an external access policy with the Identity RedmondAccessPolicy will never be created.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 demonstrates the use of the InMemory parameter; this parameter enables you to create an in-memory-only instance of an external access policy.
After it has been created, you can modify the in-memory-only instance, then use the Set-CsExternalAccessPolicy cmdlet to transform the virtual policy into a real external access policy.

To do this, the first command in the example uses New-CsExternalAccessPolicy and the InMemory parameter to create a virtual policy with the Identity RedmondAccessPolicy; this virtual policy is stored in a variable named $x.
The next three commands are used to modify three properties of the virtual policy: EnableFederationAccess, EnablePublicCloudAccess, and the EnableOutsideAccess.
Finally, the last command uses Set-CsExternalAccessPolicy to create an actual per-user external access policy with the Identity RedmondAccessPolicy.
If you do not call Set-CsExternalAccessPolicy, then the virtual policy will disappear as soon as you end your Windows PowerShell session or delete the variable $x.
Should that happen, an external access policy with the Identity RedmondAccessPolicy will never be created.

$x = New-CsExternalAccessPolicy -Identity RedmondAccessPolicy -InMemory

$x.EnableFederationAccess = $True

$x.EnablePublicCloudAccess = $True

$x.EnableOutsideAccess = $True

Set-CsExternalAccessPolicy -Instance $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 demonstrates the use of the InMemory parameter; this parameter enables you to create an in-memory-only instance of an external access policy.
After it has been created, you can modify the in-memory-only instance, then use the Set-CsExternalAccessPolicy cmdlet to transform the virtual policy into a real external access policy.

To do this, the first command in the example uses the New-CsExternalAccessPolicy cmdlet and the InMemory parameter to create a virtual policy with the Identity RedmondAccessPolicy; this virtual policy is stored in a variable named $x.
The next three commands are used to modify three properties of the virtual policy: EnableFederationAccess, EnablePublicCloudAccess, and the EnableOutsideAccess.
Finally, the last command uses the Set-CsExternalAccessPolicy cmdlet to create an actual per-user external access policy with the Identity RedmondAccessPolicy.
If you do not call the Set-CsExternalAccessPolicy cmdlet, then the virtual policy will disappear as soon as you end your Windows PowerShell session or delete the variable $x.
Should that happen, an external access policy with the Identity RedmondAccessPolicy will never be created.

$x = New-CsExternalAccessPolicy -Identity RedmondAccessPolicy -InMemory

$x.EnableFederationAccess = $True

$x.EnablePublicCloudAccess = $True

$x.EnableOutsideAccess = $True

Set-CsExternalAccessPolicy -Instance $x

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique Identity to be assigned to the policy.
New external access policies can be created at the site or per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site: -Identity site:Redmond.
To create a new per-user policy, use an Identity similar to this: -Identity SalesAccessPolicy.

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsExternalAccessPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use Set-CsExternalAccessPolicy.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



Below Content Applies To: Skype for Business Server 2015

Unique Identity to be assigned to the policy.
New external access policies can be created at the site or per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site: -Identity site:Redmond.
To create a new per-user policy, use an Identity similar to this: -Identity SalesAccessPolicy.

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsExternalAccessPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use the Set-CsExternalAccessPolicy cmdlet.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables administrators to provide explanatory text to accompany the policy.
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

### -EnableOutsideAccess
Below Content Applies To: Lync Server 2010, Lync Server 2013

Indicates whether the user is allowed to connect to Lync Server over the Internet, without logging on to the organization's internal network.
The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill EnableOutsideAccess Description}}



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



Below Content Applies To: Lync Server 2013

Indicates whether the user is allowed to conduct audio/video conversations with people who have SIP accounts with a public Internet connectivity provider such as MSN.
When set to False, audio and video options in Lync Server will be disabled any time a user is communicating with a public Internet connectivity contact.



Below Content Applies To: Skype for Business Online

{{Fill EnablePublicCloudAudioVideoAccess Description}}



Below Content Applies To: Skype for Business Server 2015

Indicates whether the user is allowed to conduct audio/video conversations with people who have SIP accounts with a public Internet connectivity provider such as MSN.
When set to False, audio and video options in Skype for Business Server 2015 will be disabled any time a user is communicating with a public Internet connectivity contact.



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

### -InMemory
Below Content Applies To: Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Online

{{Fill InMemory Description}}



Below Content Applies To: Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -EnableXmppAccess
Below Content Applies To: Lync Server 2013

Indicates whether the user is allowed to communicate with users who have SIP accounts with a federated XMPP (Extensible Messaging and Presence Protocol ) partner.
The default value is False.



Below Content Applies To: Skype for Business Online

{{Fill EnableXmppAccess Description}}



Below Content Applies To: Skype for Business Server 2015

Indicates whether the user is allowed to communicate with users who have SIP accounts with a federated XMPP (Extensible Messaging and Presence Protocol) partner.
The default value is False.



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

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new external access policy is being created.
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
None.
New-CsExternalAccessPolicy does not accept pipelined input.

### None

###  
None.
The New-CsExternalAccessPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ExternalAccess.ExternalAccessPolicy object.

### System.Object

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/624a878e-6bbf-4e8b-9a5e-e7b5521fa4c1(OCS.14).aspx)

[Get-CsExternalAccessPolicy]()

[Grant-CsExternalAccessPolicy]()

[Remove-CsExternalAccessPolicy]()

[Set-CsExternalAccessPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/624a878e-6bbf-4e8b-9a5e-e7b5521fa4c1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/624a878e-6bbf-4e8b-9a5e-e7b5521fa4c1(OCS.16).aspx)

