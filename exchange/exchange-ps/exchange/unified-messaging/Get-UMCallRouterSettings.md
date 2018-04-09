---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Get-UMCallRouterSettings
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-UMCallRouterSettings

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-UMCallRouterSettings cmdlet to view the settings of the Microsoft Exchange Unified Messaging Call Router service. This service exists on Exchange servers that have the Client Access server role installed, and is used by telephony clients to connect to Exchange.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMCallRouterSettings [[-Server] <ServerIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
When the cmdlet is used for a single server, it returns the UM call router properties including MaxCalls, MaxFaxCalls and UMDialPlans. The properties and their values are stored in the Unified Messaging section of the Microsoft Exchange configuration object in Active Directory.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-UMCallRouterSettings
```

This example displays a summary list of the Microsoft Exchange Unified Messaging Call Router service settings on all Exchange servers in the Active Directory forest.

### -------------------------- Example 2 --------------------------
```
Get-UMCallRouterSettings -Server EXCH01 | Format-List
```

This example displays detailed information for the Microsoft Exchange Unified Messaging Call Router service that's running on the server named EXCH01.

## PARAMETERS

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

### -Server
The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/dbd22f09-4a97-4738-903d-f2760c15c101.aspx)
