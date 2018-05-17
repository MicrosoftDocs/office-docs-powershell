---
external help file: 
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsVideoInteropServerSyntheticTransactionConfiguration
schema: 2.0.0
---

# Get-CsVideoInteropServerSyntheticTransactionConfiguration

## SYNOPSIS
Use the Get-CsVideoInteropServerSyntheticTransactionConfiguration cmdlet to retrieve Video Interop Server (VIS) synthetic transaction configurations.

## SYNTAX

### Filter
```
Get-CsVideoInteropServerSyntheticTransactionConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsVideoInteropServerSyntheticTransactionConfiguration [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsVideoInteropServerSyntheticTransactionConfiguration -Identity "site:Redmond"
```

This example returns the Video Interop Server synthetic transaction configuration for the Redmond site.

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return one or more collections of VIS configuration settings.
For example, to return all the settings that have been configured at the site scope use the following syntax:

-Filter "site:*"

The Filter and the Identity parameters are mutually exclusive.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Video Interop Server (VIS) synthetic transaction configuration to be retrieved.

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
To do a wildcard search for policies, use the Filter parameter instead.

If neither the Identity nor the Filter parameter is specified, then the Get-CsVideoInteropServerConfiguration cmdlet returns all the VIS synthetic transaction configurations in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the VIS configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
None

## OUTPUTS

###  
Returns an object array, or single instance (if used with the Identity parameter) of the VideoInteropServerSyntheticTransactionConfiguration object.

## NOTES

## RELATED LINKS

[Set-CsVideoInteropServerSyntheticTransactionConfiguration](Set-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[New-CsVideoInteropServerSyntheticTransactionConfiguration](New-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[Remove-CsVideoInteropServerSyntheticTransactionConfiguration](Remove-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[Test-CsP2PVideoInteropServerSipTrunkAV](Test-CsP2PVideoInteropServerSipTrunkAV.md)

