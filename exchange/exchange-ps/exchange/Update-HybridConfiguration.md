---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Update-HybridConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Update-HybridConfiguration cmdlet to define the credentials used for the hybrid configuration object.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Update-HybridConfiguration cmdlet to define the credentials used for updating the hybrid configuration object.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Update-HybridConfiguration cmdlet to define the credentials that are used to update the hybrid configuration object.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Update-HybridConfiguration -OnPremisesCredentials <PSCredential> -TenantCredentials <PSCredential> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [-ForceUpgrade] [-SuppressOAuthWarning] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can use the Update-HybridConfiguration cmdlet to designate the accounts and credentials that will be used when updating the hybrid configuration Active Directory object and connecting to the cloud-based service.

You need to be assigned permissions before you can perform this procedure. To see what permissions you need, see the "Hybrid configuration" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

You can use the Update-HybridConfiguration cmdlet to designate the accounts and credentials that will be used when updating the hybrid configuration Active Directory object and connecting to the Microsoft Office 365 for enterprises tenant.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Hybrid deployment configuration" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
$OnPremisesCreds = Get-Credential; $TenantCreds = Get-Credential; Update-HybridConfiguration -OnPremisesCredentials $OnPremisesCreds -TenantCredentials $TenantCreds
```

This example defines the credentials that are used to update the hybrid configuration object and connect to the Microsoft Office 365 for enterprises organization.


Use the first command to specify your on-premises organization credentials. For example, run this command and enter \<domain\>\\admin@contoso.com and the associated password in the resulting Windows PowerShell Credential Request dialog box.

Use the second command to specify your Office 365 for enterprises organization credentials. For example, run this command and then enter admin@contoso.onmicrosoft.com and the associated account password in the resulting Windows PowerShell Credential Request dialog box.

Use the last command to define the credentials that are used to update the hybrid configuration object and connect to the Office 365 for enterprises organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
$OnPremisesCreds = Get-Credential; $TenantCreds = Get-Credential; Update-HybridConfiguration -OnPremisesCredentials $OnPremisesCreds -TenantCredentials $TenantCreds
```

This example defines the credentials used when updating the hybrid configuration object and connecting to the Microsoft Office 365 for enterprises tenant.


Use the first command to specify your on-premises credentials. For example, run this command and then enter \<domain\> and the associated account password in the credentials dialog box when prompted.

Use the second command to specify your Office 365 for enterprises tenant credentials. For example, run this command and then enter admin@contoso.onmicrosoft.com and the associated account password in the credentials dialog box when prompted.

Use the third command to define the specified credentials that will be used when updating the hybrid configuration object and connecting to the Office 365 for enterprises tenant.

### Example 1 -------------------------- (Exchange Server 2016)
```
$OnPremisesCreds = Get-Credential; $TenantCreds = Get-Credential; Update-HybridConfiguration -OnPremisesCredentials $OnPremisesCreds -TenantCredentials $TenantCreds
```

This example defines the credentials that are used to update the hybrid configuration object and connect to the Microsoft Office 365 for enterprises organization.


Use the first command to specify your on-premises organization credentials. For example, run this command and enter \<domain\>\\admin@contoso.com and the associated password in the resulting Windows PowerShell Credential Request dialog box.

Use the second command to specify your Office 365 for enterprises organization credentials. For example, run this command and then enter admin@contoso.onmicrosoft.com and the associated account password in the resulting Windows PowerShell Credential Request dialog box.

Use the last command to define the credentials that are used to update the hybrid configuration object and connect to the Office 365 for enterprises organization.

### Example 1 -------------------------- (Exchange Online)
```
$OnPremisesCreds = Get-Credential; $TenantCreds = Get-Credential; Update-HybridConfiguration -OnPremisesCredentials $OnPremisesCreds -TenantCredentials $TenantCreds
```

This example defines the credentials that are used to update the hybrid configuration object and connect to the Microsoft Office 365 for enterprises organization.


Use the first command to specify your on-premises organization credentials. For example, run this command and enter \<domain\>\\admin@contoso.com and the associated password in the resulting Windows PowerShell Credential Request dialog box.

Use the second command to specify your Office 365 for enterprises organization credentials. For example, run this command and then enter admin@contoso.onmicrosoft.com and the associated account password in the resulting Windows PowerShell Credential Request dialog box.

Use the last command to define the credentials that are used to update the hybrid configuration object and connect to the Office 365 for enterprises organization.

## PARAMETERS

### -OnPremisesCredentials
!!! Exchange Server 2010

The OnPremisesCredentials parameter identifies the on-premises Active Directory account and credentials that will be used to configure hybrid configuration features. This account must have the Organization Management management role group assigned.



!!! Exchange Server 2013

The OnPremisesCredentials parameter specifies the on-premises Active Directory account and credentials that will be used to configure hybrid configuration features. This account must have the Organization Management management role group assigned.



!!! Exchange Server 2016, Exchange Online

The OnPremisesCredentials parameter specifies the on-premises Active Directory account and password that's used to configure the hybrid configuration object. This account must be a member of the Organization Management role group.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantCredentials
!!! Exchange Server 2010

The TenantCredentials parameter identifies the cloud-based organization account and credentials that will be used to configure hybrid configuration features. This is often the administrator account that is assigned when the cloud-based service was created. This account must have the Organization Management management role group assigned.



!!! Exchange Server 2013

The TenantCredentials parameter identifies the Office 365 for enterprises tenant organization account and credentials that will be used to configure hybrid configuration features. This is often the administrator account assigned when the Office 365 tenant was created. This account must have the Organization Management management role group assigned.



!!! Exchange Server 2016, Exchange Online

The TenantCredentials parameter specifies the Office 365 for enterprises organization account and password that's used to configure the hybrid configuration object. This is often the administrator account that's assigned when the Office 365 organization was created. This account must be a member of the Office 365 Global admin role.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceUpgrade
!!! Exchange Server 2013

The ForceUpgrade parameter suppresses the prompt to confirm an upgrade of the HybridConfiguration Active Directory object. This confirmation prompt is only displayed when using the Update-HybridConfiguration cmdlet on a server running Microsoft Exchange Server 2013 and when the existing HybridConfiguration Active Directory object version is Exchange 2010.



!!! Exchange Server 2016, Exchange Online

The ForceUpgrade switch specifies whether to suppress the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.

This confirmation prompt is only displayed when the existing HybridConfiguration Active Directory object version is Exchange 2010.



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

### -SuppressOAuthWarning
This parameter is reserved for internal Microsoft use.

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/a26f3af3-96a2-4ce8-bc6b-c7109325f321.aspx)

