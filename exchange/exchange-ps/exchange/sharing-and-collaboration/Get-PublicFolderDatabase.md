---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-PublicFolderDatabase
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-PublicFolderDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-PublicFolderDatabase cmdlet to view public folder database settings for Microsoft Exchange Server 2010 or earlier public folders.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-PublicFolderDatabase -Server <ServerIdParameter> [-DomainController <Fqdn>] [-IncludePreExchange2010]
 [-Status] [-IncludeCorrupted] [<CommonParameters>]
```

### Set1
```
Get-PublicFolderDatabase [[-Identity] <DatabaseIdParameter>] [-DomainController <Fqdn>]
 [-IncludePreExchange2010] [-Status] [-IncludeCorrupted]
 [<CommonParameters>]
```

## DESCRIPTION
You can specify either the Server or Identity parameter, but not both. Only the Server and Identity parameters can be piped.

When you run the Get-PublicFolderDatabase cmdlet with no parameters, it returns attributes of all of the public folder databases in the Exchange organization. To return specific database properties (including backup and mount status information) where the Get-PublicFolderDatabase cmdlet has to contact servers directly or perform a complex or slow calculation, make sure you use the Status parameter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-PublicFolderDatabase | Format-List
```

This example returns all the attributes of all the public folder databases in the organization by piping the results of the Get-PublicFolderDatabase command to the Format-List command.

### -------------------------- Example 2 --------------------------
```
Get-PublicFolderDatabase -Identity "Server01\PFDatabase"
```

This example returns information about the public folder database PFDatabase that resides on Server01.

### -------------------------- Example 3 --------------------------
```
Get-PublicFolderDatabase -Server Server01
```

This example returns information about all public folders on Server01.

## PARAMETERS

### -Server
The Server parameter specifies the name of a server that contains a public folder database. If specified, only the public folder database on the specified server is returned. This parameter can't be used with the Identity parameter.

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
The Identity parameter specifies a public folder database. You can use the following values:

- GUID

- Distinguished name (DN)

- Database name

If you don't specify the server name, the cmdlet searches for databases on the local server. If you have multiple databases with the same name, the cmdlet retrieves all databases with the same name in the specified scope. This parameter can't be used with the Server parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludePreExchange2010
This parameter is available or functional only in Exchange Server 2010.

The IncludePreExchange2010 parameter specifies whether information about all the public folder databases in the organization is returned, including versions of Microsoft Exchange prior to Exchange Server 2010. If the IncludePreExchange2010 parameter is included in the command, information about all of the public folder databases in the organization is returned. This parameter isn't necessary when the Server or Identity parameter is included in the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The Status parameter specifies whether additional backup and mount status information is included for servers running Exchange 2010. If the Status parameter is included, additional backup and mount status information is included for Exchange 2010 servers.

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

### -IncludeCorrupted
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/e2c9e769-ddfb-4981-906f-085834bc790f.aspx)
