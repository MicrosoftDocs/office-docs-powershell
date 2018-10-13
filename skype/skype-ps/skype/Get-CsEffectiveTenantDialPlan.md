---
external help file: 
applicable: Skype for Business Online
title: Get-CsEffectiveTenantDialPlan
schema: 2.0.0
---

# Get-CsEffectiveTenantDialPlan

## SYNOPSIS
Use the Get-CsEffectiveTenantDialPlan cmdlet to retrieve an effective tenant dial plan.

## SYNTAX

```
Get-CsEffectiveTenantDialPlan [-Identity] <UserIdParameter> [-OU <OUIdParameter>] [-DomainController <Fqdn>]
 [-Credential <PSCredential>] [-ResultSize <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsEffectiveTenantDialPlan cmdlet returns information about the effective tenant dial plan in an organization.
The returned effective Tenant Dial Plan contains the Identity and the Normalization rules that are effective for the user while using the EnterpriseVoice features.
The Identity is in the form TenantGUID_GlobalVoiceDialPlan_TenantDialPlan.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsEffectiveTenantDialPlan -Identity Vt1_User1
```

This example gets the effective tenant dial plan for the Vt1_User1 organization.


## PARAMETERS

### -Identity
The Identity parameter is the unique identifier of the tenant dial plan to retrieve.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the user name and password that's used to run this command.
Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter are either the fully qualified domain name (FQDN) or the computer name.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory.
Only objects that exist in the specified location are returned.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Specifies the number of records returned by the cmdlet.
The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0, the command will run, but no data will be returned.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS


## OUTPUTS


## NOTES


## RELATED LINKS

