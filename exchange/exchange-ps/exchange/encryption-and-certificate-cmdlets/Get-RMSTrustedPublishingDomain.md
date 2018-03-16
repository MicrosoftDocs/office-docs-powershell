---
applicable: Exchange Online
schema: 2.0.0
---

# Get-RMSTrustedPublishingDomain

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-RMSTrustedPublishingDomain cmdlet to view the settings of an existing trusted publishing domain (TPD) in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-RMSTrustedPublishingDomain [[-Identity] <RmsTrustedPublishingDomainIdParameter>] [-Default]
 [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
A trusted publishing domain contains the settings needed to use RMS features in your organization. For example, users can apply RMS templates to email messages.

## EXAMPLES

### Example 1
```
Get-RMSTrustedPublishingDomain | Format-List
```

This example lists all the trusted publishing domains that are configured in your organization and shows detailed information for each trusted publishing domain.

## PARAMETERS

### -Default
The Default switch filters the results by the default trusted publishing domain. The default trusted publishing domain displays RMS templates and provides rights protection to all new content. There can be only one default trusted publishing domain in an organization.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the trusted publishing domain. You can use any value that uniquely identifies the trusted publishing domain, for example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: RmsTrustedPublishingDomainIdParameter
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

[Online Version](https://technet.microsoft.com/library/69499195-f08f-41bd-b0ed-443688410b12.aspx)

