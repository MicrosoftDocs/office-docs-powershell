---
applicable: Skype for Business Online
schema: 2.0.0
---

# Remove-CsHybridPSTNSite

## SYNOPSIS
Use the Remove-CsHybridPSTNSite cmdlet to remove a previously specified hybrid public switched telephone network (PSTN) site.

## SYNTAX

```
Remove-CsHybridPSTNSite [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force]
 [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-CsHybridPSTNSite cmdlet to remove a previously specified hybrid public switched telephone network (PSTN) site.

Specifying a site for removal that is currently handling PSTN traffic will produce a dialogue asking for confirmation.
If the removal is confirmed, the hybrid PSTN site will be deleted and marked invalid in the associated voice routing policy.

Hybrid PSTN sites are created, retrieved, modified, and deleted by the CsHybridPSTNSite cmdlet group (New, Get, Set, and Remove .) The hybrid PSTN sites can be reviewed in your hybrid configuration by using the Get-CsTenantHybridConfiguration cmdlet.
However, you can't create or modify hybrid PSTN sites through the CsTenantHybridConfiguration cmdlets, you must use the CsHybridPSTNSite cmdlets to manage hybrid PSTN sites.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned, run the following command:

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<CmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example removes the "SeattlePSTN" hybrid public switched telephone network (PSTN) site.

Remove-CsHybridPSTNSite -Identity "SeattlePSTN"

## PARAMETERS

### -Identity
Specifies the identity of the hybrid public switched telephone network (PSTN) site.
For example: -Identity "SeattlePSTN".

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
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

### -Tenant
Specifies the global unique identifier (GUID) of the Skype for Business Online tenant account on which the cmdlet will operate.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".

You can find the tenant ID for your Skype for Business Online tenants by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will be determined by your connection and credentials.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Object
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
{{Fill AsJob Description}}

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

###  
None.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/a3b31c77-5b8f-4a8d-a947-b863362d5b4c(OCS.15).aspx)

