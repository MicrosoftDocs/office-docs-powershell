---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpclientsidecomponent
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Get-PnPClientSideComponent
---

# Get-PnPClientSideComponent

## SYNOPSIS
Retrieve one or more Client-Side components from a site page

## SYNTAX 

```powershell
Get-PnPClientSideComponent -Page <ClientSidePagePipeBind>
                           [-InstanceId <GuidPipeBind>]
                           [-Web <WebPipeBind>]
                           [-Connection <PnPConnection>]
```

## DESCRIPTION
This command allows the retrieval of the components placed on a modern sitepage along with its properties. Note that for a newly created modern site, the Home.aspx page will not be returning any components. This is because the underlying CanvasContent1 will not be populated until the homepage has been edited and published. The reason for this behavior is to allow for the default homepage to be able to be updated by Microsoft as long as it hasn't been modified. For any other site page or after editing and publishing the homepage, this command will return the correct components as they are positioned on the site page.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPClientSideComponent -Page Home
```

Returns all controls defined on the given page.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPClientSideComponent -Page Home -InstanceId a2875399-d6ff-43a0-96da-be6ae5875f82
```

Returns a specific control defined on the given page.

## PARAMETERS

### -InstanceId
The instance id of the component

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: False
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