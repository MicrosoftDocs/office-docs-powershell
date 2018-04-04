---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010
title: Get-UmServer
schema: 2.0.0
---

# Get-UMServer

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-UMServer cmdlet to display the properties for a single Unified Messaging (UM) server or to display a list of servers enabled for Unified Messaging.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMServer [[-Identity] <UMServerIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
The Get-UMServer cmdlet retrieves the properties for a Unified Messaging server or returns a list of available UM servers from Active Directory. When the cmdlet is used for a single UM server, it returns the UM server properties including MaxCalls, MaxFaxCalls, and UMDialPlans. The properties and their values for the UM server are stored in the Unified Messaging section of the Exchange Server configuration object in Active Directory.

The ExchangeVersion attribute that's returned is the minimum version of Microsoft Exchange you can use to manage the returned object. This attribute isn't the same as the version of Microsoft Exchange that's displayed in the Exchange Management Console when you select Server Configuration.

After this task is completed, you can view the parameters and values for a single Unified Messaging server or a list of all of the Unified Messaging servers in Active Directory.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-UMServer
```

This example displays a list of all the Unified Messaging servers in the Active Directory forest.

### Example 2
```
Get-UMServer -Identity MyUMServer | Format-List
```

This example displays a formatted list of properties for the Unified Messaging server named MyUMServer.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the Unified Messaging server. If this parameter isn't supplied, a list of all Unified Messaging servers is returned.

```yaml
Type: UMServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/af1f90d6-a2b1-437b-aeaa-f1324bfd0731.aspx)

