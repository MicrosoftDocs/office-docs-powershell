---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPEventReceiver.html
external help file: PnP.PowerShell.dll-Help.xml
title: Get-PnPEventReceiver
---
  
# Get-PnPEventReceiver

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPEventReceiver.md to change this file.

Return registered eventreceivers

## SYNTAX

```powershell
Get-PnPEventReceiver [-List <ListPipeBind>] [-Identity <EventReceiverPipeBind>] 
 [-Connection <PnPConnection>] [-Includes <String[]>] [<CommonParameters>]
```

## DESCRIPTION
Returns all registered or a specific eventreceiver

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPEventReceiver
```

This will return all registered event receivers on the current web

### EXAMPLE 2
```powershell
Get-PnPEventReceiver -Identity fb689d0e-eb99-4f13-beb3-86692fd39f22
```

This will return the event receiver with the provided ReceiverId "fb689d0e-eb99-4f13-beb3-86692fd39f22" from the current web

### EXAMPLE 3
```powershell
Get-PnPEventReceiver -Identity MyReceiver
```

This will return the event receiver with the provided ReceiverName "MyReceiver" from the current web

### EXAMPLE 4
```powershell
Get-PnPEventReceiver -List "ProjectList"
```

This will return all registered event receivers in the provided "ProjectList" list

### EXAMPLE 5
```powershell
Get-PnPEventReceiver -List "ProjectList" -Identity fb689d0e-eb99-4f13-beb3-86692fd39f22
```

This will return the event receiver in the provided "ProjectList" list with with the provided ReceiverId "fb689d0e-eb99-4f13-beb3-86692fd39f22"

### EXAMPLE 6
```powershell
Get-PnPEventReceiver -List "ProjectList" -Identity MyReceiver
```

This will return the event receiver in the "ProjectList" list with the provided ReceiverName "MyReceiver"

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

### -Identity
The Guid of the event receiver

```yaml
Type: EventReceiverPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -List
The list object from which to get the event receiver object

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```



## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)


