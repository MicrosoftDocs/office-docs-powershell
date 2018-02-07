---
applicable: Exchange Online
schema: 2.0.0
---

# Get-OnPremisesOrganization

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-OnPremisesOrganization cmdlet to retrieve settings for the OnPremisesOrganization object that has been created for a hybrid deployment.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-OnPremisesOrganization [[-Identity] <OnPremisesOrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The OnPremisesOrganization object represents an on-premises Exchange organization configured for hybrid deployment with a Microsoft Office 365 tenant organization. It's used with the Hybrid Configuration wizard and is typically created automatically when the hybrid deployment is initially configured by the wizard. You can use the Get-OnPremisesOrganization cmdlet to view the properties of the OnPremisesOrganization object in the Office 365 tenant.

Manual modification of this object may result in hybrid deployment misconfiguration. We strongly recommend that you use the Hybrid Configuration wizard to modify this object in the Office 365 tenant.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Online)
```
Get-OnPremisesOrganization -Identity ExchangeMail | Format-List
```

This example retrieves the on-premises organization settings for ExchangeMail using the Identity parameter.

### Example 2 -------------------------- (Exchange Online)
```
Get-OnPremisesOrganization -DomainController 'mail.contoso.com' | Format-List
```

This example retrieves the on-premises organization settings by using the FQDN of the domain controller.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the on-premises organization object. You can use the following values:

- Canonical name

- GUID

- Name

```yaml
Type: OnPremisesOrganizationIdParameter
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

[Online Version](https://technet.microsoft.com/library/c58eedcf-2b80-4022-971d-fce6365b6e75.aspx)

