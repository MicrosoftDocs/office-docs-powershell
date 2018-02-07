---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-OfflineAddressBook

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-OfflineAddressBook cmdlet to obtain the settings of one or more offline address books (OABs).

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-OfflineAddressBook cmdlet to obtain the settings of one or more offline address books (OABs).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-OfflineAddressBook cmdlet to view offline address books (OABs).

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-OfflineAddressBook -Server <ServerIdParameter> [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

### Set1
```
Get-OfflineAddressBook [[-Identity] <OfflineAddressBookIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

If a parameter isn't passed with the Get-OfflineAddressBook cmdlet, the command returns all of the OABs in the organization. If the Identity parameter is passed, the command returns the OAB for the specified identity. If the Server parameter is passed, the command returns the OABs for the specified server.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Offline address books" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

If a parameter isn't passed with the Get-OfflineAddressBook cmdlet, the command returns all of the OABs in the organization. If the Identity parameter is passed, the command returns the OAB for the specified identity. If the Server parameter is passed, the command returns the OABs for the specified server.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Offline address books" entry in the Email address and address book permissions topic.

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-OfflineAddressBook | Format-List
```

This example uses the Get-OfflineAddressBook command without parameters to obtain all the configuration details of all the existing OABs.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-OfflineAddressBook
```

This example returns a summary list of all existing OABs.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-OfflineAddressBook
```

This example returns a summary list of all existing OABs.

### Example 1 -------------------------- (Exchange Online)
```
Get-OfflineAddressBook
```

This example returns a summary list of all existing OABs.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-OfflineAddressBook -Identity "\Default Offline Address Book" | Format-List
```

This example returns detailed information about the OAB named Default Offline Address Book.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-OfflineAddressBook -Identity "\Default Offline Address Book" | Format-List
```

This example returns detailed information about the OAB named Default Offline Address Book.

### Example 2 -------------------------- (Exchange Online)
```
Get-OfflineAddressBook -Identity "\Default Offline Address Book" | Format-List
```

This example returns detailed information about the OAB named Default Offline Address Book.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-OfflineAddressBook | Format-List Name,AddressLists,GeneratingMailbox
```

This example returns specific properties for all existing OABs, including the GeneratingMailbox property that specifies the arbitration mailbox that's responsible for generating the OAB.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-OfflineAddressBook | Format-List Name,AddressLists,GeneratingMailbox,GUID
```

This example returns specific properties for all existing OABs, including the GeneratingMailbox property that specifies the arbitration mailbox that's responsible for generating the OAB.

### Example 3 -------------------------- (Exchange Online)
```
Get-OfflineAddressBook | Format-List Name,AddressLists,GeneratingMailbox,GUID
```

This example returns specific properties for all existing OABs, including the GeneratingMailbox property that specifies the arbitration mailbox that's responsible for generating the OAB.

## PARAMETERS

### -Server
!!! Exchange Server 2010, Exchange Server 2013

The Server parameter specifies the GUID, domain name, or fully qualified domain name (FQDN) of the server generating the OAB.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

Note: This parameter isn't relevant in Exchange 2013 or later. The Server property for an OAB is blank, because the OAB is generated by an arbitration mailbox.

The Server parameter returns all of the OABs that are generated by the specified Exchange 2010 or earlier server. You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- FQDN

- ExchangeLegacyDN

- GUID

You can't use this parameter with the Identity parameter.



```yaml
Type: ServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the GUID, distinguished name (DN), or OAB name that represents a specific OAB. You can also include the path using the format Server\\OfflineAddressBookName.

You can omit the parameter label Identity so that only the OAB name or GUID is supplied.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the OAB that you want to view. You can use any value that uniquely identifies the OAB. For example:

- Name or \\Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the Server parameter.



```yaml
Type: OfflineAddressBookIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/4f865c2b-21c6-46cc-9c77-a3fc98538a40.aspx)

