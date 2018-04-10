---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-DatabaseAvailabilityGroup
schema: 2.0.0
---

# Get-DatabaseAvailabilityGroup

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-DatabaseAvailabilityGroup cmdlet to obtain a variety of configuration settings, status and other information about a database availability group (DAG).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-DatabaseAvailabilityGroup [[-Identity] <DatabaseAvailabilityGroupIdParameter>] [-DomainController <Fqdn>]
 [-Status] [<CommonParameters>]
```

## DESCRIPTION
In addition to obtaining a list of DAG members, the Get-DatabaseAvailabilityGroup cmdlet can also be used to view real-time status information about a DAG, such as:

- OperationalServers

- PrimaryActiveManager

- ReplicationPort

- NetworkNames

- WitnessShareInUse

Use the Status parameter with the command to include the values for these listed properties. Without the Status parameter, the values returned for these properties are blank.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-DatabaseAvailabilityGroup DAG1 | Format-List
```

This example displays the basic properties of the DAG DAG1. The output for the command is formatted as a list.

### -------------------------- Example 2 --------------------------
```
Get-DatabaseAvailabilityGroup DAG2 -Status | Format-List
```

This example displays the properties of the DAG DAG2. Because it includes the Status parameter, the task also displays real-time status information for DAG2, such as the current list of operational servers and the server currently holding the Primary Active Manager role. In addition, several properties of the DAG, such as the witness server and directory configuration information are also displayed. The output for the command is formatted as a list.

## PARAMETERS

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
The Identity parameter specifies the name of the DAG to query.

```yaml
Type: DatabaseAvailabilityGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Status
The Status parameter instructs the command to query Active Directory for additional information and to include real-time status information in the output.

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

[Online Version](https://technet.microsoft.com/library/ea64d731-55ae-4a39-9eec-a72aa36d6dad.aspx)
