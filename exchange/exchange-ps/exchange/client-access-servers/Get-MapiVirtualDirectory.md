---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Get-MapiVirtualDirectory
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-MapiVirtualDirectory

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MapiVirtualDirectory cmdlet to view Message Application Programming Interface (MAPI) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. A MAPI virtual directory is used by supported versions of Microsoft Outlook to connect to mailboxes by using the MAPIHTTP protocol.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-MapiVirtualDirectory -Server <ServerIdParameter> [-ADPropertiesOnly] [-DomainController <Fqdn>] [<CommonParameters>]
```

### Set1
```
Get-MapiVirtualDirectory [[-Identity] <VirtualDirectoryIdParameter>] [-ADPropertiesOnly]
 [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MapiVirtualDirectory -Server ContosoMail
```

This example returns a summary list of the MAPI virtual directories on the server named ContosoMail.

### -------------------------- Example 2 --------------------------
```
Get-MapiVirtualDirectory -Identity "ContosoMail\mapi (Default Web Site)" | Format-List; Get-MapiVirtualDirectory "ContosoMail\mapi (Default Web Site)" | Format-List; Get-MapiVirtualDirectory ContosoMai\mapi* | Format-List
```

These examples return detailed information for the MAPI virtual directory named "mapi (Default Web Site)" on the server named ContosoMail. All three commands do the same thing.

### -------------------------- Example 3 --------------------------
```
Get-MapiVirtualDirectory
```

This example returns a summary list of all MAPI virtual directories in the client access services on all Mailbox servers in the organization.

## PARAMETERS

### -Server
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the MAPI virtual directory that you want to view.

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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/6837cb55-6734-4a28-9062-7227f57dafb2.aspx)
