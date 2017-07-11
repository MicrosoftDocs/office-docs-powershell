---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClientPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the client policies configured for use in your organization.
Among other things, client policies help determine the features of Microsoft Lync 2010 that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.

**Below Content Applies To:** Lync Server 2013

Returns information about the client policies configured for use in your organization.
Among other things, client policies help determine the features of Lync that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Get-CsClientPolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

Get-CsClientPolicy \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the client policies configured for use in your organization.
Among other things, client policies help determine the features of Skype for Business Server 2015 that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsClientPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsClientPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

###  (Default)
```
Get-CsClientPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In Lync Server 2010, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server 2010.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis; that makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access the system over the Internet or by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies Lync Server 2010 uses client management policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server 2010 policies, can readily be targeted towards selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
The Get-CsClientPolicy cmdlet enables you to return information about all the client policies that have been configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsClientPolicy cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsClientPolicy"}

**Below Content Applies To:** Lync Server 2013

In Lync Server, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis; that makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access the system over the Internet or by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies Lync Server uses client management policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server policies, can readily be targeted to selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
The Get-CsClientPolicy cmdlet enables you to return information about all the client policies that have been configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsClientPolicy cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsClientPolicy"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Skype for Business Server 2015 policies, can readily be targeted to selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
The Get-CsClientPolicy cmdlet enables you to return information about all the client policies that have been configured for use in your organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy
```

In the preceding example, Get-CsClientPolicy is called without any additional parameters; this returns a collection of all the client policies configured for use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Get-CsClientPolicy is called without any additional parameters; this returns a collection of all the client policies configured for use in your organization.

Get-CsClientPolicy

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Get-CsClientPolicy cmdlet is called without any additional parameters; this returns a collection of all the client policies configured for use in your organization.

Get-CsClientPolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy -Identity SalesPolicy
```

In Example 2, Get-CsClientPolicy is used to return the per-user client policy that has an Identity SalesPolicy.
Because identities are unique, this command will never return more than one item.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, Get-CsClientPolicy is used to return the per-user client policy that has an Identity SalesPolicy.
Because identities are unique, this command will never return more than one item.

Get-CsClientPolicy -Identity SalesPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Get-CsClientPolicy cmdlet is used to return the per-user client policy that has an Identity SalesPolicy.
Because identities are unique, this command will never return more than one item.

Get-CsClientPolicy -Identity SalesPolicy

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy -Filter "tag:*"
```

Example 3 uses the Filter parameter to return all the client policies that have been configured at the per-user scope.
The filter value "tag:*" tells Get-CsClientPolicy to return only those policies that have an Identity that begins with the string value "tag:".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 uses the Filter parameter to return all the client policies that have been configured at the per-user scope.
The filter value "tag:*" tells Get-CsClientPolicy to return only those policies that have an Identity that begins with the string value "tag:".

Get-CsClientPolicy -Filter "tag:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the Filter parameter to return all the client policies that have been configured at the per-user scope.
The filter value "tag:*" tells the Get-CsClientPolicy cmdlet to return only those policies that have an Identity that begins with the string value "tag:".

Get-CsClientPolicy -Filter "tag:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True}
```

The preceding command returns a collection of all the client policies where the DisableSavingIM property is True.
To do this, Get-CsClientPolicy is first called without any parameters in order to return a collection of all the client policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where the DisableSavingIM property is equal to True.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns a collection of all the client policies where the DisableSavingIM property is True.
To do this, Get-CsClientPolicy is first called without any parameters in order to return a collection of all the client policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where the DisableSavingIM property is equal to True.

Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns a collection of all the client policies where the DisableSavingIM property is True.
To do this, the Get-CsClientPolicy cmdlet is first called without any parameters in order to return a collection of all the client policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where the DisableSavingIM property is equal to True.

Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True -and $_.EnableIMAutoArchiving -eq $False}
```

In Example 5, the only client policies returned are the policies that meet two criteria: the DisableSavingIM property must be True and the EnableIMAutoArchiving property must be False.
To do this, the command first calls Get-CsClientPolicy in order to return a collection of all the client policies configured for use in the organization.
That collection is then piped to Where-Object, which picks out only those policies that meet both of the following criteria: DisableSavingIM must be equal to True and EnableIMAutoArchiving must be equal to False.
The -and operator tells Where-Object that only objects that meet all the specified criteria should be selected.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, the only client policies returned are the policies that meet two criteria: the DisableSavingIM property must be True and the EnableIMAutoArchiving property must be False.
To do this, the command first calls Get-CsClientPolicy in order to return a collection of all the client policies configured for use in the organization.
That collection is then piped to Where-Object, which picks out only those policies that meet both of the following criteria: DisableSavingIM must be equal to True and EnableIMAutoArchiving must be equal to False.
The -and operator tells Where-Object that only objects that meet all the specified criteria should be selected.

Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True -and $_.EnableIMAutoArchiving -eq $False}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, the only client policies returned are the policies that meet two criteria: the DisableSavingIM property must be True and the EnableIMAutoArchiving property must be False.
To do this, the command first calls the Get-CsClientPolicy cmdlet in order to return a collection of all the client policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies that meet both of the following criteria: DisableSavingIM must be equal to True and EnableIMAutoArchiving must be equal to False.
The -and operator tells the Where-Object cmdlet that only objects that meet all the specified criteria should be selected.

Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True -and $_.EnableIMAutoArchiving -eq $False}

### -------------------------- Example 6 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy | Where-Object {$_.DisableSavingIM -eq $True -or $_.EnableIMAutoArchiving -eq $False}
```

Example 6 is a variation of the command shown in Example 5.
This time, however, policies are selected as long as they meet at least one of the following criteria: either the DisableSavingIM property is True and/or the EnableIMAutoArchiving property is False.
To accomplish this task, the command first calls Get-CsClientPolicy to return a collection of all the client policies configured for use in the organization.
That collection is then piped to Where-Object, which picks out only those policies that meet at least one of the following criteria: DisableSavingIM is equal to True and/or EnableIMAutoArchiving is equal to False.
The -or operator tells Where-Object that any object that meets at least one of the specified conditions should be selected.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

Example 6 is a variation of the command shown in Example 5.
This time, however, policies are selected as long as they meet at least one of the following criteria: either the DisableSavingIM property is True and/or the EnableIMAutoArchiving property is False.
To accomplish this task, the command first calls Get-CsClientPolicy to return a collection of all the client policies configured for use in the organization.
That collection is then piped to Where-Object, which picks out only those policies that meet at least one of the following criteria: DisableSavingIM is equal to True and/or EnableIMAutoArchiving is equal to False.
The -or operator tells Where-Object that any object that meets at least one of the specified conditions should be selected.

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

Example 6 is a variation of the command shown in Example 5.
This time, however, policies are selected as long as they meet at least one of the following criteria: either the DisableSavingIM property is True and/or the EnableIMAutoArchiving property is False.
To accomplish this task, the command first calls the Get-CsClientPolicy cmdlet to return a collection of all the client policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies that meet at least one of the following criteria: DisableSavingIM is equal to True and/or EnableIMAutoArchiving is equal to False.
The -or operator tells the Where-Object cmdlet that any object that meets at least one of the specified conditions should be selected.

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Unique identifier of the client policy to be returned.
To refer to the global policy, use this syntax: -Identity global.
To refer to a site policy, use syntax similar to this: -Identity site:Redmond.
To refer to a per-user policy, use syntax similar to this: -Identity SalesDepartmentPolicy.

If this parameter is omitted, then all the client policies configured for use in your organization will be returned.



**Below Content Applies To:** Skype for Business Online

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

### -Filter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
For example, to return all the policies configured at the site scope use this syntax: -Filter "site:*".
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".



**Below Content Applies To:** Skype for Business Online

{{Fill Filter Description}}



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Retrieves the client policy data from the local replica of the Central Management store rather than from the Central Management store itself.



**Below Content Applies To:** Skype for Business Online

{{Fill LocalStore Description}}



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
**Below Content Applies To:** Skype for Business Online

{{Fill Tenant Description}}



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account whose client policies are being returned.
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
Get-CsClientPolicy does not accept pipelined input.

### None

###  
None.
The Get-CsClientPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsClientPolicy returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.

### System.Object

###  
The Get-CsClientPolicy cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c8e1cb96-2bf7-447c-b41c-d896fe85e349(OCS.14).aspx)

[Grant-CsClientPolicy]()

[New-CsClientPolicy]()

[Remove-CsClientPolicy]()

[Set-CsClientPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/c8e1cb96-2bf7-447c-b41c-d896fe85e349(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c8e1cb96-2bf7-447c-b41c-d896fe85e349(OCS.16).aspx)

