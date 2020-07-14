---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpclientsidecomponent
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Remove-PnPClientSideComponent
---

# Remove-PnPClientSideComponent

## SYNOPSIS
Removes a Client-Side component from a page

## SYNTAX 

```powershell
Remove-PnPClientSideComponent -Page <ClientSidePagePipeBind>
                              -InstanceId <GuidPipeBind>
                              [-Force [<SwitchParameter>]]
                              [-Web <WebPipeBind>]
                              [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPClientSideComponent -Page Home -InstanceId a2875399-d6ff-43a0-96da-be6ae5875f82
```

Removes the control specified from the page.

### ------------------EXAMPLE 2------------------
```powershell
$webpart = Get-PnPClientSideComponent -Page "Home" | Where-Object { $_.Title -eq "Site activity" }
Remove-PnPClientSideComponent -Page "Home" -InstanceId $webpart.InstanceId -Force
```

Finds a web part with the Title "Site activity" on the Home.aspx page, then removes it from the page

## PARAMETERS

### -Force
If specified you will not receive the confirmation question

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -InstanceId
The instance id of the component

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Page
The name of the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)