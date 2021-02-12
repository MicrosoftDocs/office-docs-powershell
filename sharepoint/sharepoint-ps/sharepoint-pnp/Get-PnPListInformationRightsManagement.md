---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPListInformationRightsManagement.html
external help file: PnP.PowerShell.dll-Help.xml
title: Get-PnPListInformationRightsManagement
---
  
# Get-PnPListInformationRightsManagement

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPListInformationRightsManagement.md to change this file.

Get the site closure status of the site which has a site policy applied

## SYNTAX

```powershell
Get-PnPListInformationRightsManagement -List <ListPipeBind> [-Connection <PnPConnection>]
 [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPListInformationRightsManagement -List "Documents"
```

Returns Information Rights Management (IRM) settings for the list. See 'Get-Help Set-PnPListInformationRightsManagement -Detailed' for more information about the various values.

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -List

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```



## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)


