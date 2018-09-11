---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Get-CsVideoInteropServiceProvider
schema: 2.0.0
---

# Get-CsVideoInteropServiceProvider

## SYNOPSIS
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings. The CsVideoInteropServiceProvider cmdlets allow you to designate provider/tenant specific information about the connection to the provider.


## SYNTAX

### Identity (Default)
```
Get-CsVideoInteropServiceProvider [-Tenant <System.Guid>] [[-Identity] <XdsGlobalRelativeIdentity>]
 [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVideoInteropServiceProvider [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings. The CsVideoInteropServiceProvider cmdlets allow you to designate provider/tenant specific information about the connection to the provider.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsVideoInteropServiceProvider
```

Get all of the providers that have been configured for use within the organization.

## PARAMETERS

### -Filter
A regex string filter on the providers that have been set up for use within the organization.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Retrieve the specific provider information by name if is known - returns only those providers that have already been set within the tenant.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Internal Microsoft use only.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
