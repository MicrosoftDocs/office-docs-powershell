---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Update-CsAddressBook
schema: 2.0.0
---

# Update-CsAddressBook

## SYNOPSIS
Forces the specified Address Book servers to synchronize their contents with the User database.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Update-CsAddressBook [[-Fqdn] <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Address Book servers are intermediaries between Active Directory and Skype for Business Server.
The Address Book server ensures that the user information stored in Skype for Business Server is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with the information stored in the User database.
By default, this synchronization takes place every five minutes.
(However, that time interval can be modified by using the `Set-CsAddressBookConfiguration` cmdlet.)

If you can't wait for synchronization to take place or if it appears that, for some reason, synchronization isn't taking place, you can use the `Update-CsAddressBook` cmdlet to force an Address Book server to immediately synch with the user information stored in the User database.



## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Update-CsAddressBook
```

In Example 1, the `Update-CsAddressBook` cmdlet is called without any parameters.
This synchronizes all the Address Book servers in the organization.


### -------------------------- EXAMPLE 2 --------------------------
```
Update-CsAddressBook -Fqdn atl-abs-001.litwareinc.com
```

In Example 2, only a single Address Book server is synchronized: the server with the FQDN atl-abs-001.litwareinc.com.


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
The Update-CsAddressBook cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, the Update-CsAddressBook cmdlet updates existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.

## NOTES

## RELATED LINKS

[Get-CsAddressBookConfiguration](Get-CsAddressBookConfiguration.md)

[Test-CsAddressBookService](Test-CsAddressBookService.md)

[Test-CsAddressBookWebQuery](Test-CsAddressBookWebQuery.md)
