---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsClientPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing client policy.
Among other things, client policies help determine the features of Microsoft Lync 2010 that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.

**Below Content Applies To:** Lync Server 2013

Removes an existing client policy.
Among other things, client policies help determine the features of Lync that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Remove-CsClientPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Removes an existing client policy.
Among other things, client policies help determine the features of Skype for Business that are available to users; for example, you might give some users the right to transfer files while denying this right to other users.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsClientPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-BypassDualWrite <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In Lync Server 2010, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server 2010.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis, which makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access Lync Server 2010 over the Internet or who access the system by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies Lync Server 2010 uses client policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server 2010 policies, can readily be targeted towards selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
Policies that have been configured at the site or per-user scope, can later be deleted by using the Remove-CsClientPolicy cmdlet.
You can also run Remove-CsClientPolicy against the global policy.
In that case, the global policy will not be removed; that's because global policies cannot be deleted.
However, all the properties in the global policy will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsClientPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClientPolicy"}

**Below Content Applies To:** Lync Server 2013

In Lync Server, client policies replace the Group Policy settings used in previous versions of the product.
In Microsoft Office Communicator 2007 and Microsoft Office Communicator 2007 R2, Group Policy helped determine what users could do with Communicator and other clients; for example, there were Group Policy settings that determined whether or not users could save a transcript of their instant messaging sessions; whether information from Microsoft Outlook was incorporated into their presence information; and whether or not users could include emoticons or formatted text in instant messages.

As useful as Group Policy is, however, the technology does have some limitations when applied to Lync Server.
For one thing, Group Policy is designed to be applied on a per-domain or per-organizational unit (OU) basis, which makes it difficult to target policies toward a more select group of users (for example, all the users who work in a particular department, or all the users who have a particular job title).
For another, Group Policy is only applied to users who log on to the domain and who log on using a computer; Group Policy is not applied to users who access Lync Server over the Internet or who access the system by using a mobile phone.
This means that the same user can have a different experience depending on the device he or she uses to log on, and where he or she logs on from.

To help address these inconsistencies Lync Server uses client policies instead of Group Policy.
Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Lync Server policies, can readily be targeted toward selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
Policies that have been configured at the site or per-user scope, can later be deleted by using the Remove-CsClientPolicy cmdlet.
You can also run Remove-CsClientPolicy against the global policy.
In that case, the global policy will not be removed; that's because global policies cannot be deleted.
However, all the properties in the global policy will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsClientPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClientPolicy"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

Client policies are applied each time a user accesses the system, regardless of where the user logs on from and regardless of the type of device the user logs on with.
In addition, client policies, like other Skype for Business Server 2015 policies, can readily be targeted toward selected groups of users.
You can even create a custom policy that gets assigned to a single user.

Client policies can be configured at the global, site, and per-user scopes.
Policies that have been configured at the site or per-user scope, can later be deleted by using the Remove-CsClientPolicy cmdlet.
You can also run the Remove-CsClientPolicy cmdlet against the global policy.
In that case, the global policy will not be removed; that's because global policies cannot be deleted.
However, all the properties in the global policy will be reset to their default values.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsClientPolicy -Identity SalesPolicy
```

In Example 1 Remove-CsClientPolicy is used to delete the client policy that has the Identity SalesPolicy.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1 Remove-CsClientPolicy is used to delete the client policy that has the Identity SalesPolicy.

Remove-CsClientPolicy -Identity SalesPolicy

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Remove-CsClientPolicy cmdlet is used to delete the client policy that has the Identity SalesPolicy.

Remove-CsClientPolicy -Identity SalesPolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy -Filter "tag:*" | Remove-CsClientPolicy
```

In Example 2, Get-CsClientPolicy and Remove-CsClientPolicy are used to delete all the client policies that have been configured at the per-user scope.
The command uses Get-CsClientPolicy and the Filter parameter to return a collection of all the client policies configured at the per-user scope; the filter value "tag:*" tells Get-CsClientPolicy to limit the retrieved data to client policies that have an Identity that begins with the string value "tag:".
The filtered collection is then piped to Remove-CsClientPolicy, which removes each policy in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, Get-CsClientPolicy and Remove-CsClientPolicy are used to delete all the client policies that have been configured at the per-user scope.
The command uses Get-CsClientPolicy and the Filter parameter to return a collection of all the client policies configured at the per-user scope; the filter value "tag:*" tells Get-CsClientPolicy to limit the retrieved data to client policies that have an Identity that begins with the string value "tag:".
The filtered collection is then piped to Remove-CsClientPolicy, which removes each policy in the collection.

Get-CsClientPolicy -Filter "tag:*" | Remove-CsClientPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Get-CsClientPolicy cmdlet and the Remove-CsClientPolicy cmdlet are used to delete all the client policies that have been configured at the per-user scope.
The command uses the Get-CsClientPolicy cmdlet and the Filter parameter to return a collection of all the client policies configured at the per-user scope; the filter value "tag:*" tells the Get-CsClientPolicy cmdlet to limit the retrieved data to client policies that have an Identity that begins with the string value "tag:".
The filtered collection is then piped to the Remove-CsClientPolicy cmdlet, which removes each policy in the collection.

Get-CsClientPolicy -Filter "tag:*" | Remove-CsClientPolicy

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsClientPolicy | Where-Object {$_.EnableAppearOffline -eq $True} | Remove-CsClientPolicy
```

The preceding command deletes all the client policies where the EnableAppearOffline property is set to True.
To do this, Get-CsClientPolicy is first called without any additional parameters; that returns a collection of all the client policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the EnableAppearOffline property is equal to True.
In turn, this filtered collection is piped to Remove-CsClientPolicy, which deletes each policy in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the client policies where the EnableAppearOffline property is set to True.
To do this, Get-CsClientPolicy is first called without any additional parameters; that returns a collection of all the client policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the EnableAppearOffline property is equal to True.
In turn, this filtered collection is piped to Remove-CsClientPolicy, which deletes each policy in the collection.

Get-CsClientPolicy | Where-Object {$_.EnableAppearOffline -eq $True} | Remove-CsClientPolicy

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the client policies where the EnableAppearOffline property is set to True.
To do this, the Get-CsClientPolicy cmdlet is first called without any additional parameters; that returns a collection of all the client policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the EnableAppearOffline property is equal to True.
In turn, this filtered collection is piped to the Remove-CsClientPolicy cmdlet, which deletes each policy in the collection.

Get-CsClientPolicy | Where-Object {$_.EnableAppearOffline -eq $True} | Remove-CsClientPolicy

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Unique identifier for the client policy to be removed.
To "remove" the global policy, use the following syntax: -Identity global.
(Note that the global policy cannot actually be removed.
Instead, all the properties in that policy will be reset to their default values.) To remove a site policy, use syntax similar to this: -Identity "site:Redmond".
To remove a per-user policy, use syntax similar to this: -Identity "SalesDepartmentPolicy".
You cannot use wildcards when specifying a policy Identity.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If this parameter is present, the policy will automatically be removed even if it is currently assigned to at least one user.
If this parameter is not present, then Remove-CsClientPolicy will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy will be removed.



**Below Content Applies To:** Skype for Business Online

{{Fill Force Description}}



**Below Content Applies To:** Skype for Business Server 2015

If this parameter is present, the policy will automatically be removed even if it is currently assigned to at least one user.
If this parameter is not present, then the Remove-CsClientPolicy cmdlet will not automatically remove a per-user policy that is assigned to at least one user.
Instead, a confirmation prompt will appear asking if you are sure that you want to remove the policy.
You must answer yes (by pressing the Y key) before the command will continue and the policy will be removed.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

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

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the client policy is being removed.
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
Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.
Remove-CsClientPolicy accepts pipelined instances of the client policy object.

### Microsoft.Rtc.Management.Xds.XdsIdentity

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.
The Remove-CsClientPolicy cmdlet accepts pipelined instances of the client policy object.

## OUTPUTS

###  
Remove-CsClientPolicy does not return a value.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.

### System.Object

###  
The Remove-CsClientPolicy cmdlet does not return a value.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Client.ClientPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2beb1557-8397-493e-be87-910ce01ba8f5(OCS.14).aspx)

[Get-CsClientPolicy]()

[Grant-CsClientPolicy]()

[New-CsClientPolicy]()

[Set-CsClientPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/2beb1557-8397-493e-be87-910ce01ba8f5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2beb1557-8397-493e-be87-910ce01ba8f5(OCS.16).aspx)

