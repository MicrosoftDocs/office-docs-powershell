---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Remove-CsVideoInteropServiceProvider
schema: 2.0.0
---

# Remove-CsVideoInteropServiceProvider

## SYNOPSIS
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings. The CsVideoInteropServiceProvider cmdlets allow you to designate provider/tenant specific information about the connection to the provider.

## SYNTAX

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings. The CsVideoInteropServiceProvider cmdlets allow you to designate provider/tenant specific information about the connection to the provider.

Use the Remove-CsVideoInteropServiceProvider to remove all provider information about a provider that your organization no longer uses.  The only input is Identity - the provider you wish to remove.

## EXAMPLES

## PARAMETERS

### -Identity
Specify the VideoInteropServiceProvider to be removed.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
