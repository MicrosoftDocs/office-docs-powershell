---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Update-CsAddressBook

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Forces the specified Address Book servers to synchronize their contents with the User database.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Forces the specified Address Book servers to synchronize their contents with the User database.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Update-CsAddressBook [[-Fqdn] <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Address Book servers are intermediaries between Active Directory and Microsoft Lync Server 2010.
The Address Book server ensures that the user information stored in Lync Server 2010 is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with the information stored in the User database.
By default, this synchronization takes place every five minutes.
(However, that time interval can be modified by using the Set-CsAddressBookConfiguration cmdlet.)

If you can't wait for synchronization to take place or if it appears that, for some reason, synchronization isn't taking place, you can use the Update-CsAddressBook cmdlet to force an Address Book server to immediately synch with the user information stored in the User database.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Update-CsAddressBook cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Update-CsAddressBook"}

**Below Content Applies To:** Lync Server 2013

Address Book servers are intermediaries between Active Directory and Lync Server.
The Address Book server ensures that the user information stored in Lync Server is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with the information stored in the User database.
By default, this synchronization takes place every five minutes.
(However, that time interval can be modified by using the Set-CsAddressBookConfiguration cmdlet.)

If you can't wait for synchronization to take place or if it appears that, for some reason, synchronization isn't taking place, you can use the Update-CsAddressBook cmdlet to force an Address Book server to immediately synch with the user information stored in the User database.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Update-CsAddressBook cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Update-CsAddressBook"}

**Below Content Applies To:** Skype for Business Server 2015

Address Book servers are intermediaries between Active Directory and Skype for Business Server 2015.
The Address Book server ensures that the user information stored in Skype for Business Server 2015 is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with the information stored in the User database.
By default, this synchronization takes place every five minutes.
(However, that time interval can be modified by using the Set-CsAddressBookConfiguration cmdlet.)

If you can't wait for synchronization to take place or if it appears that, for some reason, synchronization isn't taking place, you can use the Update-CsAddressBook cmdlet to force an Address Book server to immediately synch with the user information stored in the User database.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Update-CsAddressBook
```

In Example 1, Update-CsAddressBook is called without any parameters.
This synchronizes all the Address Book servers in the organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Update-CsAddressBook is called without any parameters.
This synchronizes all the Address Book servers in the organization.

Update-CsAddressBook

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Update-CsAddressBook cmdlet is called without any parameters.
This synchronizes all the Address Book servers in the organization.

Update-CsAddressBook

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Update-CsAddressBook -Fqdn atl-abs-001.litwareinc.com
```

In Example 2, only a single Address Book server is synchronized: the server with the FQDN atl-abs-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, only a single Address Book server is synchronized: the server with the FQDN atl-abs-001.litwareinc.com.

Update-CsAddressBook -Fqdn atl-abs-001.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, only a single Address Book server is synchronized: the server with the FQDN atl-abs-001.litwareinc.com.

Update-CsAddressBook -Fqdn atl-abs-001.litwareinc.com

## PARAMETERS

### -Fqdn
Enables you to specify an individual Address Book to be updated.
If this parameter is not included then all of your Address Book servers will be synchronized with the User database.
Individual Address Book servers should be referenced by their fully qualified domain name (FQDN); for example, atl-abs-001.litwareinc.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010

{{Fill Force Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Update-CsAddressBook does not accept pipelined input.

###  
None.
The Update-CsAddressBook cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, Update-CsAddressBook updates existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.

###  
None.
Instead, the Update-CsAddressBook cmdlet updates existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/109c5fe7-0154-4161-b19f-01bab024bb3d(OCS.14).aspx)

[Get-CsAddressBookConfiguration]()

[Test-CsAddressBookService]()

[Test-CsAddressBookWebQuery]()

[Online Version](http://technet.microsoft.com/EN-US/library/109c5fe7-0154-4161-b19f-01bab024bb3d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/109c5fe7-0154-4161-b19f-01bab024bb3d(OCS.16).aspx)

