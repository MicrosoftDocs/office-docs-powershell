---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpgroup
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPGroup
---

# Get-PnPGroup

## SYNOPSIS
Returns a specific SharePoint group or all SharePoint groups in site.

## SYNTAX 

### ByName
```powershell
Get-PnPGroup [-Identity <GroupPipeBind>]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

### Members
```powershell
Get-PnPGroup [-AssociatedMemberGroup [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

### Visitors
```powershell
Get-PnPGroup [-AssociatedVisitorGroup [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

### Owners
```powershell
Get-PnPGroup [-AssociatedOwnerGroup [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

### 
```powershell
Get-PnPGroup [-Includes <String[]>]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPGroup
```

Returns all SharePoint groups in a site

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPGroup -Identity 'My Site Users'
```

This will return the group called 'My Site Users' in if available in the current site

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPGroup -AssociatedMemberGroup
```

This will return the current members group for the site

## PARAMETERS

### -AssociatedMemberGroup
Retrieve the associated member group

```yaml
Type: SwitchParameter
Parameter Sets: Members

Required: False
Position: Named
Accept pipeline input: False
```

### -AssociatedOwnerGroup
Retrieve the associated owner group

```yaml
Type: SwitchParameter
Parameter Sets: Owners

Required: False
Position: Named
Accept pipeline input: False
```

### -AssociatedVisitorGroup
Retrieve the associated visitor group

```yaml
Type: SwitchParameter
Parameter Sets: Visitors

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
Get a specific group by name

```yaml
Type: GroupPipeBind
Parameter Sets: ByName
Aliases: Name

Required: False
Position: 0
Accept pipeline input: True
```

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### List<Microsoft.SharePoint.Client.Group>

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)