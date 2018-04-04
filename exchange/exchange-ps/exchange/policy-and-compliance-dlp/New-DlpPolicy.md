---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-DlpPolicy
schema: 2.0.0
---

# New-DlpPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-DlpPolicy cmdlet to create data loss prevention (DLP) policies in your Exchange organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DlpPolicy [[-Name] <String>] [-Confirm] [-Description <String>] [-DomainController <Fqdn>]
 [-Mode <Audit | AuditAndNotify | Enforce>] [-Parameters <Hashtable>] [-State <Enabled | Disabled>]
 [-Template <String>] [-TemplateData <Byte[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-DlpPolicy -Name "Contoso PII" -Template "U.S. Personally Identifiable Information (PII) Data"
```

This example creates a new DLP policy named Contoso PII with the following values:

- The DLP policy is enabled and set to audit only.

- The DLP policy is based on the existing "U.S. Personally Identifiable Information (PII) Data" DLP policy template.

## PARAMETERS

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies an optional description for the DLP policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

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

### -Mode
The Mode parameter specifies the action and notification level of the DLP policy. Valid values for this parameter are:

- Audit: The actions specified by the DLP policy aren't enforced when a message matches the conditions specified by the policy, and the Policy Tip isn't displayed to the user.

- AuditAndNotify: The actions specified by the DLP policy aren't enforced when a message matches the conditions specified by the policy, but the Policy Tip is displayed to the user in a supported email client.

- Enforce: The actions specified by the DLP policy are enforced when a message matches the conditions specified by the policy, and the Policy Tip is displayed to the user in a supported email client.

By default, the value of this parameter is set to Audit when you create a new DLP policy. If the State parameter is set to Disabled, the value of the Mode parameter is irrelevant.

```yaml
Type: Audit | AuditAndNotify | Enforce
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a descriptive name for the DLP policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters
The Parameters parameter specifies the parameter values that are required by the DLP policy template that you specify using the Template or TemplateData parameters. DLP policy templates may contain parameters that need to be populated with values from your organization. For example, a DLP policy template may include an exception group that defines users who are exempt from the DLP policy.

Valid input for this parameter is in the format: @{\<parameter1\>="\<value1\>";\<parameter2\>="\<value2\>"...}.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
The State parameter enables or disables the DLP policy. Valid input for this parameter is Enabled or Disabled. By default, a new DLP policy that you create is enabled. If you want to create a disabled DLP policy, specify the value Disabled for this parameter.

```yaml
Type: Enabled | Disabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
The Template parameter specifies the existing DLP policy template from which you can create a new DLP policy. You can't use the Template and TemplateData parameters in the same command.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TemplateData
The TemplateData parameter specifies an external DLP policy template file from which you can create a new DLP policy. You can't use the TemplateData and Template parameters in the same command.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, ([Byte[]](Get-Content -Encoding Byte -Path "C:\\My Documents\\\<filename\>" -ReadCount 0)).

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/6fac5dca-be09-4296-aebf-b12bb55ce4d3.aspx)
