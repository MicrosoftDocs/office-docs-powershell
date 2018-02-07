---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-WebServicesVirtualDirectory

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-WebServicesVirtualDirectory cmdlet to retrieve information in Active Directory for the virtual directory EWS from a computer running Microsoft Exchange Server 2010 with the Client Access server role installed.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-WebServicesVirtualDirectory cmdlet to retrieve information in Active Directory for the Exchange Web Services virtual directory from a computer running Microsoft Exchange Server 2013.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-WebServicesVirtualDirectory cmdlet to view Exchange Web Services (EWS) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-WebServicesVirtualDirectory -Server <ServerIdParameter> [-ADPropertiesOnly] [-DomainController <Fqdn>]
 [-ShowMailboxVirtualDirectories] [<CommonParameters>]
```

### Set1
```
Get-WebServicesVirtualDirectory [[-Identity] <VirtualDirectoryIdParameter>] [-ADPropertiesOnly]
 [-DomainController <Fqdn>] [-ShowMailboxVirtualDirectories] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-WebServicesVirtualDirectory cmdlet can be run on a local server or run remotely if the server name is specified in the Identity or Server parameters. It can also be run without parameters to retrieve the configuration settings from all Microsoft Office Outlook Web App virtual directories on all Internet Information Services (IIS) Web sites located on the Client Access servers in the organization.

The Get-WebServicesVirtualDirectory cmdlet can be run on any server that has the Exchange administration tools installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange Web Services settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Get-WebServicesVirtualDirectory cmdlet can be run on a local server or run remotely if the server name is specified in the Identity or Server parameters. It can also be run without parameters to retrieve the configuration settings from all Microsoft OfficeOutlook Web App virtual directories on all Internet Information Services (IIS) websites located on the Client Access servers in the organization.

The Get-WebServicesVirtualDirectory cmdlet can be run on any server that has the Exchange administration tools installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange Web Services virtual directory settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

The Get-WebServicesVirtualDirectory cmdlet can be run on a local server or run remotely if the server name is specified in the Identity or Server parameters.

The Get-WebServicesVirtualDirectory cmdlet can be run on any server that has the Exchange administration tools installed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-WebServicesVirtualDirectory -Identity EWS(default Web site)
```

This example returns the settings for the Exchange Web Services virtual directory EWS under the default Web site in IIS.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-WebServicesVirtualDirectory -Identity "EWS (Default Web Site)"
```

This example returns the settings for the Exchange Web Services virtual directory EWS under the default website in IIS.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-WebServicesVirtualDirectory -ServerMBX01
```

This example returns a summary list of all EWS virtual directories on the server named MBX01.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-WebServicesVirtualDirectory -Identity CAS01
```

This example uses the Identity parameter to retrieve all settings for the Exchange Web Services virtual directories on the server CAS01.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-WebServicesVirtualDirectory -Identity CAS01
```

This example uses the Identity parameter to retrieve all settings for the Exchange Web Services virtual directories on the server CAS01.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-WebServicesVirtualDirectory -Identity "MBX01\EWS*" | Format-List
```

This example returns detailed information for the EWS virtual directory named "EWS (Default Web Site)" on the server named MBX01.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-WebServicesVirtualDirectory
```

This example returns a summary list of all virtual directories in the client access services on all Mailbox servers in the organization.

## PARAMETERS

### -Server
!!! Exchange Server 2010, Exchange Server 2013

The Server parameter specifies the name or GUID of the server that hosts the virtual directories that you want to display.



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
!!! Exchange Server 2010

The Identity parameter specifies either the GUID of the server, the name of the Web site, or the name of the virtual directory that you want to display.



!!! Exchange Server 2013

The Identity parameter specifies the GUID of the server, the name of the website, or the name of the virtual directory that you want to display.



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

The ShowMailboxVirtualDirectories switch specifies whether the virtual directories on the Mailbox servers within the organization are shown.



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

[Online Version](https://technet.microsoft.com/library/6d8babcc-ed3f-4f6a-9b34-e332996dc74a.aspx)

