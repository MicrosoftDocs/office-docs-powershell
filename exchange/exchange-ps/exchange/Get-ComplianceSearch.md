---
applicable: Exchange Server 2016, Office 365 Security & Compliance Center
schema: 2.0.0
---

# Get-ComplianceSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ComplianceSearch cmdlet to view estimate compliance searches in Exchange Server 2016 and in the Office 365 Security & Compliance Center. After you use the New-ComplianceSearchAction cmdlet to define a preview action for the compliance search, use the Get-ComplianceSearchAction cmdlet to view the results of the compliance search.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ComplianceSearch [[-Identity] <ComplianceSearchIdParameter>] [-Case <String>] [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ComplianceSearch
```

This example shows a summary list of all compliance searches.

### Example 1 -------------------------- (Office 365 Security & Compliance Center)
```
Get-ComplianceSearch
```

This example shows a summary list of all compliance searches.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-ComplianceSearch -Identity "Case 1234" | Format-List
```

This examples show details of the compliance search named Case 1234.

### Example 2 -------------------------- (Office 365 Security & Compliance Center)
```
Get-ComplianceSearch -Identity "Case 1234" | Format-List
```

This examples show details of the compliance search named Case 1234.

## PARAMETERS

### -Case
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the compliance search that you want to view.

You can use any value that uniquely identifies the compliance search. For example:

- Name

- JobRunId (GUID)

You can find these values by running the command Get-ComplianceSearch | Format-Table -Auto Name,JobRunId,Status

To improve the performance of this cmdlet, some compliance search properties aren't returned if you don't specify the identity of the compliance search. These properties are:

- Items

- Size

- SuccessResults

- NumBindings

- ExchangeLocation

- SharePointLocation

- OneDriveLocation

To view these properties, you need to use the Identity parameter in the command.

```yaml
Type: ComplianceSearchIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/3bf7edeb-7674-464e-abad-4b1b8858114d.aspx)

