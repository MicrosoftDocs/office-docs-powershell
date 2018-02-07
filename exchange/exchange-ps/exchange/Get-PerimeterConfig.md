---
applicable: Exchange Online
schema: 2.0.0
---

# Get-PerimeterConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-PerimeterConfig cmdlet to view the list of gateway server and internal mail server IP addresses that have been added to the cloud-based safelists.

## SYNTAX

```
Get-PerimeterConfig [[-Identity] <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
If you have an on-premises messaging system, you can add the IP addresses of your mail servers to cloud-based safelists. Safelists are also known as whitelists. You add IP addresses to cloud-based safelists to make sure that e-mail that originates in your on-premises messaging system isn't treated as spam.

## EXAMPLES

### Example -------------------------- (Exchange Online)
```
Get-PerimeterConfig
```

This example returns the list of gateway servers and internal mail servers in your organization that have been added to cloud-based safelists.

## PARAMETERS

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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

[Online Version](https://technet.microsoft.com/library/34ef07d4-b055-4f33-bb88-15e41e0386db.aspx)

