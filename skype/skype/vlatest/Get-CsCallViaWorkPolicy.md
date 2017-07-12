---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsCallViaWorkPolicy

## SYNOPSIS
Use the Get-CsCallViaWorkPolicy cmdlet to return call via work policies.
Call via work policies enable and manage the characteristics of outbound calls placed through the Skype for Business client.

## SYNTAX

### Filter
```
Get-CsCallViaWorkPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsCallViaWorkPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example returns the properties of the policy currently assigned to the Redmond site.

Get-CsCallViaWorkPolicy -Identity Site:Redmond

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
For example, to return all the policies configured at the site scope use this syntax: -Filter "site:*".
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the identity of the policy to be returned.
Call via work policies can be returned at the global, site, or per-user scope.

Global syntax: -Identity Global

Site syntax: -Identity Site:Redmond

Per-user syntax: -Identity CallviaWorkStandard

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the call via work policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
The Get-CsCallViaWorkPolicy returns Microsoft.Rtc.Management.WritableConfig.Policy.CallViaWork.CallViaWorkPolicy instances.

## NOTES

## RELATED LINKS

[Remove-CsCallViaWorkPolicy]()

[Set-CsCallViaWorkPolicy]()

[New-CsCallViaWorkPolicy]()

[Grant-CsCallViaWorkPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/9771da00-06ec-4f0b-bfe2-2c6d0e9a2e7b(OCS.16).aspx)

