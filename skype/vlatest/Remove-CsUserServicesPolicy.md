---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsUserServicesPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Deletes an existing User Services policy.
User Services policies determine whether or not a user's contacts are stored in Microsoft Lync Server 2013 Preview or in the Unified Contact Store.
The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Microsoft Lync 2013 Preview, Microsoft Outlook, and/or Microsoft Outlook Web Access.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Deletes an existing User Services policy.
User Services policies determine whether or not a user's contacts are stored in Skype for Business Server 2015 or in the Unified Contact Store.
The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Microsoft Outlook, and/or Microsoft Outlook Web Access.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsUserServicesPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-Tenant <Guid>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The unified contact store introduced in Microsoft Lync Server 2013 Preview gives administrators the option of storing a user's contacts in Microsoft Exchange Server 2013 Preview instead of in Lync Server; in turn that allows the user to access the same set of contacts in Microsoft Outlook and Outlook Web Access as well as in Microsoft Lync 2013 Preview.
(Alternatively, you can continue to store contacts in Lync Server 2013 Preview.
In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web Access, and one for use with Lync 2013 Preview.)

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store.
User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed.
When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Lync Server 2013 Preview his or her contacts will automatically be migrated to the unified contact store.

If this property is set to False this automatic migration will not take place.
However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Lync Server.
In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store.
After that, you must then use the Invoke-UcsRollback cmdlet to "manually" migrate the contacts from the unified contact store back to Lync Server.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsUserServicesPolicy"}

Lync Server Control Panel: The functions carried out by the Remove-CsUserServicesPolicy cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The unified contact store introduced in Lync Server 2013 gives administrators the option of storing a user's contacts in Exchange instead of in Skype for Business Server 2015; in turn that allows the user to access the same set of contacts in Outlook and Outlook Web App as well as in Skype for Business.
(Alternatively, you can continue to store contacts in Skype for Business Server 2015.
In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web Access, and one for use with Skype for Business.)

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store.
User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed.
When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Skype for Business Server 2015 his or her contacts will automatically be migrated to the unified contact store.

If this property is set to False this automatic migration will not take place.
However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Skype for Business Server 2015.
In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store.
After that, you must then use the Invoke-CsUcsRollback cmdlet to "manually" migrate the contacts from the unified contact store back to Skype for Business Server 2015.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsUserServicesPolicy cmdlet are not available in the Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the per-user User Services policy RedmondUserServicesPolicy.

Remove-CsUserServicesPolicy -Identity "RedmondUserServicesPolicy"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the per-user User Services policy RedmondUserServicesPolicy.

Remove-CsUserServicesPolicy -Identity "RedmondUserServicesPolicy"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all the User Services policies configured at the site scope.
To do this, the command first uses Get-CsUserServicesPolicy and the Filter value to return a collection of all the policies configured at the site scope; that's accomplished by using the filter value "site:*".
The resulting collection is then piped to Remove-CsUserServicesPolicy, which deletes each policy in the collection.

Get-CsUserServicesPolicy -Filter "site:*" | Remove-CsUserServicesPolicy

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all the User Services policies configured at the site scope.
To do this, the command first uses the Get-CsUserServicesPolicy cmdlet and the Filter value to return a collection of all the policies configured at the site scope; that's accomplished by using the filter value "site:*".
The resulting collection is then piped to the Remove-CsUserServicesPolicy cmdlet, which deletes each policy in the collection.

Get-CsUserServicesPolicy -Filter "site:*" | Remove-CsUserServicesPolicy

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the User Services policies that allow the use of the Unified Contact Store are deleted.
To carry out this task, the command first calls Get-CsUserServicesPolicy without any parameters in order to return a collection of all the User Services policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the UcsAllowed property is equal to (-eq) True ($True).
Those policies are then piped to, and removed by, the Remove-CsUserServicesPolicy cmdlet.

Get-CsUserServicesPolicy | Where-Object {$_.UcsAllowed -eq $True} | Remove-CsUserServicesPolicy

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the User Services policies that allow the use of the Unified Contact Store are deleted.
To carry out this task, the command first calls the Get-CsUserServicesPolicy cmdlet without any parameters in order to return a collection of all the User Services policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the UcsAllowed property is equal to (-eq) True ($True).
Those policies are then piped to, and removed by, the Remove-CsUserServicesPolicy cmdlet.

Get-CsUserServicesPolicy | Where-Object {$_.UcsAllowed -eq $True} | Remove-CsUserServicesPolicy

## PARAMETERS

### -Identity
Unique identifier for the policy to be deleted.
To remove a policy configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To remove a policy configured at the service scope, use syntax similar to this:

-Identity "UserServer:atl-cs-001.litwareinc.com"

The User Server service is the only service that can host a user services policy.

Policies can also be removed at the per-user scope.
To remove per-user policies, use syntax similar to this:

-Identity "RedmondUserServicesPolicy"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Below Content Applies To: Lync Server 2013

Removes the user services policy assigned to the specified Office 365 tenant.
When removing a policy assigned to a tenant, you must also include the Identity parameter along with the parameter value "global":

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" -Identity "global"



Below Content Applies To: Skype for Business Server 2015

Removes the user services policy assigned to the specified Skype for Business Online tenant.
When removing a policy assigned to a tenant, you must also include the Identity parameter along with the parameter value "global":

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" -Identity "global"



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Remove-CsUserServicesPolicy accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Poligy.UserServices.UserServicesPolicy object.

###  
The Remove-CsUserServicesPolicy cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object.

## OUTPUTS

###  
None.
Instead, Remove-CsUserServicesPolicy deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Poligy.UserServices.UserServicesPolicy object.

###  
None.
Instead, the Remove-CsUserServicesPolicy cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object.

## NOTES

## RELATED LINKS

[Get-CsUserServicesPolicy]()

[Grant-CsUserServicesPolicy]()

[New-CsUserServicesPolicy]()

[Set-CsUserServicesPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/025f9a94-ff44-4e06-8b14-721f8fd9924f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/025f9a94-ff44-4e06-8b14-721f8fd9924f(OCS.16).aspx)

