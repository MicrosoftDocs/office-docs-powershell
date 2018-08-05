---
external help file: 
applicable: Skype for Business Online
title: Register-CsHybridPSTNAppliance
schema: 2.0.0
---

# Register-CsHybridPSTNAppliance

## SYNOPSIS
Use the `Register-CsHybridPSTNAppliance` cmdlet to create a new Skype for Business Cloud Connector Edition appliance.

## SYNTAX

```
Register-CsHybridPSTNAppliance [-Name <String>] [-WhatIf] [-Confirm] [-Tenant <Guid>] [-InMemory]
 [-MediationServerIPAddress <String>] [-MediationServerFqdn <Fqdn>] [-Force] [-SiteName <String>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Cloud Connector Edition appliances are registered, retrieved, modified and unregistered by the CsHybridPSTNAppliance cmdlet group (Register, Get, Set and Unregister).
The Skype for Business Cloud Connector Edition appliances can be reviewed in your hybrid configuration by using the `Get-CsTenantHybridConfiguration` cmdlet.
However, you can't create or modify Skype for Business Cloud Connector Edition appliances through the CsTenantHybridConfiguration cmdlets.
You must use the CsHybridPSTNAppliance cmdlets to manage Skype for Business Cloud Connector Edition appliances.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Register-CsHybridPSTNAppliance -Identity 1e298a7b-9a71-4579-9e82-c2988ceb2bf3
```

This example creates the specified hybrid PSTN appliance.


## PARAMETERS

### -MediationServerFqdn
Mediation Server FQDN of this Skype for Business Cloud Connector Edition appliance.

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

### -MediationServerIPAddress
Mediation Server IP address of this Skype for Business Cloud Connector Edition appliance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name of Skype for Business Cloud Connector Edition appliance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteName
Name of Skype for Business Cloud Connector Edition site that the appliance belongs to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet’s matching Set-.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
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
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

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
[Get-CsHybridPSTNAppliance](https://docs.microsoft.com/en-us/powershell/module/skype/get-cshybridpstnappliance?view=skype-ps)

[Set-CsHybridPSTNAppliance](https://docs.microsoft.com/en-us/powershell/module/skype/set-cshybridpstnappliance?view=skype-ps)

[Unregister-CsHybridPSTNAppliance](https://docs.microsoft.com/en-us/powershell/module/skype/unregister-cshybridpstnappliance?view=skype-ps)
