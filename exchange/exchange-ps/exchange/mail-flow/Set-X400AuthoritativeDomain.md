---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Set-X400AuthoritativeDomain
schema: 2.0.0
---

# Set-X400AuthoritativeDomain

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-X400AuthoritativeDomain cmdlet to edit an existing X.400 authoritative domain for your organization. The X.400 authoritative domain defines the standard fields for the namespace appended to the recipient identity for all mailboxes assigned an X.400 address.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-X400AuthoritativeDomain [-Identity] <X400AuthoritativeDomainIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-Name <String>] [-WhatIf] [-X400DomainName <X400Domain>]
 [-X400ExternalRelay <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
X.400 domain names can include only the following ASCII characters:

- A to Z

- a to z

- 0-9

- These punctuation marks and special characters: (space) ' () + , - . / : = ?

You can use the following X.400 attributes (1 each per address):

country

- Abbreviation: C

- Maximum character length: 2

administrative domain

- Abbreviation: A

- Maximum character length: 16

private domain

- Abbreviation: P

- Maximum character length: 16

organization name

- Abbreviation: O

- Maximum character length: 64

organizational unit name

- Abbreviation: OU1 to OU4

- Maximum character length: 32

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-X400AuthoritativeDomain Sales -X400DomainName "C=US;A=att,P=Contoso;O=Sales and Marketing" -Name "Sales and Marketing"
```

This example makes the following changes to an existing X.400 authoritative domain:

- It changes the domain name from Sales to Sales and Marketing.

- It updates the organizational attribute to Sales and Marketing.

## PARAMETERS

### -Identity
The Identity parameter specifies the X.400 authoritative domain tht you want to modify. You can use any value that uniquely identifies the domain. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: X400AuthoritativeDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Name
The Name parameter specifies the unique name for the X.400 authoritative domain. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

### -X400DomainName
The X400DomainName parameter specifies the X.400 namespace that can only include the X.400 organizational components. Specifically, only the following attribute types are supported:

- C (Country)

- A (ADMD)

- P (PRMD)

- O (Organization)

- OU1 (Organization unit 1)

- OU2 (Organization unit 2)

- OU3 (Organization unit 3)

- OU4 (Organization unit 4)

Separate the address attributes with semicolons and enclose the entire address in quotation marks (for example, "C=US;A=att;P=Contoso;O=Sales").

```yaml
Type: X400Domain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -X400ExternalRelay
The X400ExternalRelay parameter specifies whether this authoritative domain is an external relay domain. If you set the X400ExternalRelay parameter to $true, Exchange routes e-mail to the external address and doesn't treat resolution failures to this subdomain as errors.

```yaml
Type: $true | $false
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

[Online Version](https://technet.microsoft.com/library/188bd7f3-a88c-411a-a4ef-16697d7f8c7b.aspx)
