---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsPublicProvider

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a public provider configured for use in your organization.
A public provider is an organization that provides instant messaging (IM), presence, and related services to the general public.
Microsoft Lync Server 2010 ships with three public providers configured but not enabled: Yahoo!; AOL; and MSN.

Below Content Applies To: Lync Server 2013

Removes a public provider configured for use in your organization.
A public provider is an organization that provides instant messaging (IM), presence, and related services to the general public.
Lync Server ships with three public providers configured but not enabled: Yahoo!, AIM (AOL), and Messenger (MSN).
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Removes a public provider configured for use in your organization.
A public provider is an organization that provides instant messaging (IM), presence, and related services to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsPublicProvider [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups. 
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2010.
Lync Server 2010 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with MSN, then your users will be able to exchange instant messages and presence information with anyone who has an MSN instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) If you decide later on to terminate this relationship, you can use the Remove-CsPublicProvider cmdlet to delete the public provider.
When you delete a public provider, the provider is removed from your list of federated partners; at that point, the only way to re-establish the relationship is to re-create the provider.
If you want to temporarily suspend a relationship, use the Disable-CsPublicProvider cmdlet instead.
When a public provider is disabled the provider is not deleted from the list of federated partners; instead, the provider is simply marked as disabled and communication between your organization and that provider is suspended.
To re-establish the relationship you can use Enable-CsPublicProvider to re-enable the provider.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsPublicProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPublicProvider"}

Below Content Applies To: Lync Server 2013

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2013 Preview.
Lync Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Messenger (MSN), then your users will be able to exchange instant messages and presence information with anyone who has a Messenger instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) If you decide later on to terminate this relationship, you can use the Remove-CsPublicProvider cmdlet to delete the public provider.
When you delete a public provider, the provider is removed from your list of federated partners; at that point, the only way to re-establish the relationship is to re-create the provider.
If you want to temporarily suspend a relationship, use the Disable-CsPublicProvider cmdlet instead.
When a public provider is disabled the provider is not deleted from the list of federated partners; instead, the provider is simply marked as disabled and communication between your organization and that provider is suspended.
To re-establish the relationship you can use Enable-CsPublicProvider to re-enable the provider.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsPublicProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPublicProvider"}

Below Content Applies To: Skype for Business Server 2015

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server 2015 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Skype your users will be able to exchange instant messages and presence information with anyone who has a Skype instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) If you decide later on to terminate this relationship, you can use the Remove-CsPublicProvider cmdlet to delete the public provider.
When you delete a public provider, the provider is removed from your list of federated partners; at that point, the only way to re-establish the relationship is to re-create the provider.
If you want to temporarily suspend a relationship, use the Disable-CsPublicProvider cmdlet instead.
When a public provider is disabled the provider is not deleted from the list of federated partners; instead, the provider is simply marked as disabled and communication between your organization and that provider is suspended.
To re-establish the relationship you can use the Enable-CsPublicProvider cmdlet to re-enable the provider.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsPublicProvider -Identity "MSN"
```

The preceding command deletes the public provider with the Identity MSN.
After this command has completed, MSN will no longer appear in the list of configured public providers; at that point, the only way to re-establish federation with MSN is to re-create the provider.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 deletes the public provider with the Identity Messenger.
After this command has completed, Messenger will no longer appear in the list of configured public providers; at that point, the only way to re-establish federation with Messenger is to re-create the provider.

Remove-CsPublicProvider -Identity "Messenger"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 deletes the public provider with the Identity Skype.
After this command has completed, Skype will no longer appear in the list of configured public providers; at that point, the only way to re-establish federation with Skype is to re-create the provider.

Remove-CsPublicProvider -Identity "Skype"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider | Remove-CsPublicProvider
```

Example 2 deletes all the public providers configured for use in the organization.
To do this, the command first uses Get-CsPublicProvider to return a collection of all the public providers currently configured for use.
This collection is then piped to Remove-CsPublicProvider, which, in turn, deletes each provider in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all the public providers configured for use in the organization.
To do this, the command first uses Get-CsPublicProvider to return a collection of all the public providers currently configured for use.
This collection is then piped to Remove-CsPublicProvider, which, in turn, deletes each provider in the collection.

Get-CsPublicProvider | Remove-CsPublicProvider

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all the public providers configured for use in the organization.
To do this, the command first uses the Get-CsPublicProvider cmdlet to return a collection of all the public providers currently configured for use.
This collection is then piped to the Remove-CsPublicProvider cmdlet, which, in turn, deletes each provider in the collection.

Get-CsPublicProvider | Remove-CsPublicProvider

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False} | Remove-CsPublicProvider
```

In Example 3, all the public providers that are currently disabled are removed from the set of configured pubic providers.
To carry out this task, the command first uses Get-CsPublicProvider to return a collection of all the public providers currently configured for use.
This collection is piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.
That filtered collection is then piped to Remove-CsPublicProvider, which deletes all the items in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the public providers that are currently disabled are removed from the set of configured pubic providers.
To carry out this task, the command first uses Get-CsPublicProvider to return a collection of all the public providers currently configured for use.
This collection is piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.
That filtered collection is then piped to Remove-CsPublicProvider, which deletes all the items in the collection.

Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False} | Remove-CsPublicProvider

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the public providers that are currently disabled are removed from the set of configured pubic providers.
To carry out this task, the command first uses the Get-CsPublicProvider cmdlet to return a collection of all the public providers currently configured for use.
This collection is piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.
That filtered collection is then piped to the Remove-CsPublicProvider cmdlet, which deletes all the items in the collection.

Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False} | Remove-CsPublicProvider

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the public provider to be removed.
The Identity typically the name of the website providing the services (for example, Yahoo!; AOL; MSN; etc.).



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the public provider to be removed.
The Identity typically the name of the website providing the services.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.
Remove-CsPublicProvider accepts pipelined instances of the public provider object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.
The Remove-CsPublicProvider cmdlet accepts pipelined instances of the public provider object.

## OUTPUTS

###  
None.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b9eec2f4-cf36-41b7-8023-67790cc8d4cd(OCS.14).aspx)

[Disable-CsPublicProvider]()

[Enable-CsPublicProvider]()

[Get-CsPublicProvider]()

[New-CsPublicProvider]()

[Set-CsPublicProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/b9eec2f4-cf36-41b7-8023-67790cc8d4cd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b9eec2f4-cf36-41b7-8023-67790cc8d4cd(OCS.16).aspx)

