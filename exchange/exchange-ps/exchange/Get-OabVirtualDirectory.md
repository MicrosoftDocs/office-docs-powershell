---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-OabVirtualDirectory

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-OABVirtualDirectory cmdlet to return configuration information about offline address book (OAB) distribution points.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-OabVirtualDirectory cmdlet to return configuration information about offline address book (OAB) distribution points.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-OabVirtualDirectory cmdlet to view offline address book (OAB) virtual directories(OAB distribution points) that are used in Internet Information Services (IIS) on Microsoft Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-OabVirtualDirectory -Server <ServerIdParameter> [-ADPropertiesOnly] [-DomainController <Fqdn>]
 [-ShowMailboxVirtualDirectories] [<CommonParameters>]
```

### Set1
```
Get-OabVirtualDirectory [[-Identity] <VirtualDirectoryIdParameter>] [-ADPropertiesOnly]
 [-DomainController <Fqdn>] [-ShowMailboxVirtualDirectories] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-OABVirtualDirectory cmdlet queries a distribution point by identity or by Web distribution points on a specific server, or queries for all Web distribution points.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "OAB virtual directories" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Get-OabVirtualDirectory cmdlet queries a distribution point by identity or by web distribution points on a specific server, or queries for all web distribution points. By default, this cmdlet only returns virtual directories on Mailbox servers. To view virtual directories on Client Access servers, use the ShowBackEndVirtualDirectories parameter.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Offline address book connectivity" entry in the Email address and address book permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-OABVirtualDirectory
```

This example returns all OAB virtual directory Web distribution points.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-OabVirtualDirectory
```

This example returns all OAB virtual directory web distribution points.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-OabVirtualDirectory
```

This example returns all OAB virtual directory web distribution points.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-OABVirtualDirectory -Server CAS-01-007
```

This example returns all OAB virtual directory Web distribution points on the server CAS-01-007.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-OabVirtualDirectory -Server CAS-01-007
```

This example returns all OAB virtual directory web distribution points on the server CAS-01-007.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-OabVirtualDirectory -Server MBX-01-007
```

This example returns all OAB virtual directory web distribution points on the server named MBX-01-007.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-OabVirtualDirectory -ShowBackEndVirtualDirectories
```

This example returns OAB virtual directories on Client Access servers. By default, this cmdlet only returns virtual directories on Mailbox servers.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-OabVirtualDirectory -Identity "MBX-01-007\OAB*" | Format-List
```

This example returns detailed information for the OAB virtual directory named "OAB (Default Web Site)" on the server named MBX-01-007.

## PARAMETERS

### -Server
!!! Exchange Server 2010, Exchange Server 2013

The Server parameter specifies the Exchange server on which to perform the selected operation.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2016

The Server parameter specifies the Exchange server that hosts the virtual directory. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- ExchangeLegacyDN

You can't use the Server and Identity parameters in the same command.



```yaml
Type: ServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ADPropertiesOnly
The ADPropertiesOnly switch specifies whether to return only the properties about the virtual directory stored in Active Directory. The properties stored in the Internet Information Services (IIS) metabase aren't returned.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the GUID, distinguished name (DN), or OAB virtual directory name that represents a specific OAB virtual directory. You can also include the path using the format Server\\OfflineAddressBookVirtualDirectoryName.

You can omit the parameter label so that only the OAB virtual directory name, DN, or GUID is supplied.

You can't use this parameter in conjunction with the Server parameter.



!!! Exchange Server 2016

The Identity parameter specifies the virtual directory that you want to view.

You can use any value that uniquely identifies the virtual directory. For example:

- Name or \<Server\>\\Name

- Distinguished name (DN)

- GUID

The Name value uses the syntax "\<VirtualDirectoryName\> (\<WebsiteName\>)" from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax \<VirtualDirectoryName\>\*.

You can't use the Identity and Server parameters in the same command.



```yaml
Type: VirtualDirectoryIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ShowMailboxVirtualDirectories
!!! Exchange Server 2013

The ShowMailboxVirtualDirectories switch specifies whether the OAB virtual directories on Mailbox servers are returned. This switch should only be used with the direction of Microsoft support.



!!! Exchange Server 2016

The ShowMailboxVirtualDirectories switch shows information about backend virtual directories on Mailbox servers. You don't need to specify a value with this switch.

By default, this cmdlet shows information about virtual directories in the Client Access services on Mailbox servers. Client connections are proxied from the Client Access services on Mailbox servers to the backend services on Mailbox servers. Clients don't connect directly to the backend services.

We recommend that you use this parameter only under the direction of Microsoft Customer Service and Support.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/4ca17b2b-73c4-41f2-86fe-a52fb8d89d73.aspx)

